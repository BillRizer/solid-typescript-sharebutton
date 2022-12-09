



Aplicando SOLID em um simples componente de share button

1 - implementação feita para funcionar, sem nenhum cuidado com design.

2 -Single Responsibility Priciple (SRP)
    - Aplicando princio de "single responsability", uma classe deve ser coesa, ou seja
    ter responsabilidades e propositos claros alem de ter um unico motivo para sofrer alteracoes.
    No nosso caso isto nao acontece pois a class "ShareButton" manipula DOM e tem a logica de links
    para compartilhamento.

3 - Open closed Principle (OCP)
    - aberto para extensao e fechado para modificacao
    o codigo te convida para modificalo, no caso de querermos add outra rede social, teriamos
    que modificar a classe ferindo o princio de open-closed 
