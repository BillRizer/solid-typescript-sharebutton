

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

## 5 - interface segregation (ISP)
Uma interface nao deve forcar uma classe a implementar coisas que ela nao ultiliza, interfaces (gordas) geralmente se espalham pelo sistema trazendo complexidade e dificuldade de manutenção.

As instancias de `ShareButtonAlert`, `SharedButtonPrinter` e `SharedButtonFacebook` **possuem coportamentos** diferentes e por isso não podem extender diretamente da classe `AbstractShareButton`, deve haver uma abstração intermediaria para que uma instancia de `ShareButtonAlert` seja compativel com a classe `AbstractShareButto` **(LSP)**

 para resolver isto foi criada uma classe abstrata extendendo a `AbstractShareButton` para cada comportamento diferente, como:

- `windows.print()`  no compartilhamento por impressora
- `alert()` no compartilhamento por popup 
- `windows.open()` para compartilhamento por link

Assim elas sao compativeis com `AbstractShareButton` sem deixar de implementar algum metodo por nao precisar daquela funcionalidade, como seria se `SharedButtonPrinter` possuisse um metodo de *createLink()*, uma vez que para impressao nao precisa do link

 