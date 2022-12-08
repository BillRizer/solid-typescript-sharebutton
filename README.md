



Aplicando SOLID em um simples componente de share button

1 - implementação feita para funcionar, sem nenhum cuidado com design.

2 -Single Responsibility Priciple (SRR)
    - Aplicando princio de "single responsability", uma classe deve ser coesa, ou seja
    ter responsabilidades e propositos claros alem de ter um unico motivo para sofrer alteracoes.
    No nosso caso isto nao acontece pois a class "ShareButton" manipula DOM e tem a logica de links
    para compartilhamento.


