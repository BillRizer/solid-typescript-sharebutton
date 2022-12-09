

Demonstrando refatoração aplicando SOLID em um simples componente de compartilhamento por botão que foi feito sem cuidado com design:


## 1 passo - implementação feita para funcionar
construída sem nenhum cuidado com design. Feita para funcionar até que desventura a encontre :collision: RIP :open_hands:


## 2 passo - Single Responsibility Priciple (SRP)

Aplicando SRP, uma classe **deve ser coesa**, ou seja ter  responsabilidades e propositos claros.

Também deve ter um único motivo para sofrer alterações, no nosso caso isto **não** acontece, pois a classe ``ShareButton`` manipula DOM e possui a lógica de links para compartilhamento


## 3 passo - Open closed Principle (OCP)

Aplicando OCP, uma classe deve estar aberta para extensão e fechado para modificação.

a classe ``AbstractShareButton`` "te convida" para modifica-la caso precise de novas funcionalidades. Para adicionarmos suporte a outra rede social "Pinterest" temos que modificar a classe **ferindo o princípio do OCP**.

A forma correta é que uma classe mais especialista como  ``AbstractLinkShareButton`` e que herde da classe `AbstractShareButton` e obrigue as suas sub classes a implementarem, 


 > Assim como o design pattern de comportamento **Template method**, em que é definido o esqueleto da implementacao na superclasse mas deixa as sub classes sobrescreverem etapas especificas sem modificar sua estrutura)`

* Para provar que este principio esta sendo seguido corretamente ao estender para nova funcionalidade *"Share by Pinterest"* a classe `AbstractShareButton` não foi alterada, foi criada uma classe `ShareButtonPinterest` que estende AbstractShareButton.


## 4 passo - liskov substitution principle (LSP)

Uma sub classe não pode quebrar as expectativas estabelecidas por uma super classe.
> "Se S é um subtipo de T, então os objetos do tipo T, em um programa, podem ser substituídos pelos objetos de tipo S sem que seja necessário alterar as propriedades deste programa"

## 5 passo - interface segregation (ISP)
Uma interface não deve forcar uma classe a implementar coisas que ela não utiliza, interfaces (gordas) geralmente se espalham pelo sistema trazendo complexidade e dificuldade de manutenção.

As instâncias de `ShareButtonAlert`, `SharedButtonPrinter` e `SharedButtonFacebook` **possuem comportamentos** diferentes e por isso não podem estender diretamente da classe `AbstractShareButton`, deve haver uma abstração intermediaria para que uma instância de `ShareButtonAlert` seja compatível com a classe `AbstractShareButto` **(LSP)**

 para resolver isto foi criada uma classe abstrata estendendo a `AbstractShareButton` para cada comportamento diferente, como:

- `windows.print()` e `alert()` (function) no compartilhamento por impressora ou popup 
- `windows.open()` para compartilhamento por link

Assim elas são compatíveis com `AbstractShareButton` sem deixar de implementar algum método por não precisar daquela funcionalidade, como seria se `SharedButtonPrinter` possuísse um método de *createLink()*, uma vez que para impressão não precisa do link

## 6 passo - Dependency Inversion Principle (DIP)
Deve-se sempre depender das abstrações e não das implementações, abstrações mudam menos, facilitam a evolução de código e mudança de comportamento.
> "Modulos de alto nivel nao devem depender de modulos de baixo nivel, ambos devem depender da abstração"

Com a utilização do **Dependency inversion** nossa classe não depende da implementação do `EventHandler` e sim do seu contrato (interface). Podemos facilmente estender nosso `EventHandler` para outra implementação. Basta injetarmos esta dependência na nova instância da classe.

Criei a classe `LogEventHandler` para demonstrar o quão fácil é mudar a dependência quando ela não esta acoplada na classe, basta injetar uma dependência que respeita o contrato exigido e pronto.

O exemplo é simples, mas valido, agora temos nosso código com os princípios do SOLID aplicados.

Mas agora vem a boa e velha discussão, até que ponto vale a pena criarmos um código tao robusto para uma coisa tao simples, neste exemplo poderíamos deixar como estava no primeiro commit, tudo martelado no index e tudo certo, pode ser valido, depende da estratégia.

Porem o intuito deste simples repositório foi demonstrar como aplicar estes conceitos e explicar de forma simples.

[]
