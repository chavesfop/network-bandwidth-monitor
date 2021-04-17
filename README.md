# network-bandwidth-monitor
Log de velocidades de upload e download em um Roteador Intelbras


## Necessario:

- Necessario ter o PHP rodando.
- aponte o script de http://localhost pro ip do seu servidor PHP.
- coloque o arquivo .php no servidor pra gerar o arquivo de log
- copie o script js, inspecione elemento na tela do roteador e cole o js.


## O que irá acontecer? 

- de 3 em 3 segundos será feito uma requisição POST para o script PHP
- nesta requisição tem os dados dos elementos de velocidade de download 
e velocidade de upload da tela inicial do roteador
- ao chegar no PHP ele irá abrir o arquivo networklog.txt e escrever a data
atual e os dados enviados pelo js.

## Por que foi feito este script?

- Basicamente para medir o uso de rede de mineração de bitcoins.
