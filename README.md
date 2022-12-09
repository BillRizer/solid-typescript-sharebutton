

Demonstrando refatoracao aplicando SOLID em um simples componente de compartilhamento por botao que foi feito sem cuidado com design:


## 1 passo - implementação feita para funcionar
construida sem nenhum cuidado com design. Feita para funcionar ate que desventura a encontre :collision: RIP :open_hands:


## 2 passo - Single Responsibility Priciple (SRP)

Aplicando SRP, uma classe **deve ser coesa**, ou seja ter  responsabilidades e propositos claros.

Tambem deve ter um unico motivo para sofrer alteracoes, no nosso caso isto **não** acontece pois a classe ``ShareButton`` manipula DOM e tem a logica de links para compartilhamento


## 3 passo - Open closed Principle (OCP)

Aplicando OCP, uma classe deve estar aberta para extensao e fechado para modificacao.

a classe ``AbstractShareButton`` "te convida" para modifica-la caso precise de novas funcionalidades. Para adicionarmos suporte a outra rede social "Pinterest" temos que modificar a classe **ferindo o principio do OCP**.

A forma correta é que uma classe mais especialista como  ``AbstractLinkShareButton`` e que herde da classe `AbstractShareButton` e obrigue as suas sub classes a implementarem, 

 > Assim como o design pattern de comportamento **Template method**, em que é definido o esqueleto da implementacao na superclasse mas deixa as sub classes sobrescreverem etapas especificas sem modificar sua estrutura)`

* Para provar que este princio esta sendo seguido corretamente ao extender para nova funcionalidade *"Share by Pinterest"* a classe `AbstractShareButton` não foi alterada, foi criada uma nova classe `ShareButtonPinterest` que extende AbstractShareButton.


## 4 passo - liskov substitution principle (LSP)

Uma sub classe não pode quebrar as espectativas estabelecidas por uma super classe.
> "Se S é um subtipo de T, então os objetos do tipo T, em um programa, podem ser substituídos pelos objetos de tipo S sem que seja necessário alterar as propriedades deste programa"

## 5 passo - interface segregation (ISP)
Uma interface nao deve forcar uma classe a implementar coisas que ela nao ultiliza, interfaces (gordas) geralmente se espalham pelo sistema trazendo complexidade e dificuldade de manutenção.

As instancias de `ShareButtonAlert`, `SharedButtonPrinter` e `SharedButtonFacebook` **possuem coportamentos** diferentes e por isso não podem extender diretamente da classe `AbstractShareButton`, deve haver uma abstração intermediaria para que uma instancia de `ShareButtonAlert` seja compativel com a classe `AbstractShareButto` **(LSP)**

 para resolver isto foi criada uma classe abstrata extendendo a `AbstractShareButton` para cada comportamento diferente, como:

- `windows.print()` e `alert()` (function) no compartilhamento por impressora ou popup 
- `windows.open()` para compartilhamento por link

Assim elas sao compativeis com `AbstractShareButton` sem deixar de implementar algum metodo por nao precisar daquela funcionalidade, como seria se `SharedButtonPrinter` possuisse um metodo de *createLink()*, uma vez que para impressao nao precisa do link

## 6 passo - Dependency Inversion Principle (DIP)
deve-se sempre depender das abstracoes e nao das implementacoes, abstracoes mudam menos, facilitam a evolucao de codigo e mudança de comportamento.
> "Modulos de alto nivel nao devem depender de modulos de baixo nivel, ambos devem depender da abstração"

Com a utilização do **Dependency inversion** nossa classe nao depende da implementacao do `EventHandler` e sim do seu contrato (interface). podemos facilmente extender nosso `EventHandler` para outra implementacao. basta injetarmos esta dependencia na nova instancia da classe.

criei a classe `LogEventHandler` para demonstrar o quao facil é mudar a dependencia quando ela nao esta acoplada na classe, basta injetar uma dependencia que respeita o contrato exigido e pronto.

O exemplo é simples mas valido, agora temos nosso codigo com os principios do SOLID aplicados.

Mas agora vem a boa e velha discussao, ate que ponto vale a pena criarmos um codigo tao robusto para uma coisa tao simples, neste exemplo poderiamos deixar como estava no primeiro commit, tudo martelado no index e tudo certo, pode ser valido, depende da estrategia.

Porem o intuito deste simples repo foi demonstrar como aplicar estes conceitos e explica-los de forma simples.

[]