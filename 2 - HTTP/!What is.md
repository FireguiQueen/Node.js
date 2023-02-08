## Parâmetros padrões
```js
const http = require('http')
http.createServer(function(req, res){
    // TUDO O QUE O NOSSO SERVIDOR IRÁ RODAR
})
``` 
O primeiro parâmetro é o "req"
* Significa "requerimento". É quando o SERVIDOR está recebendo informações do cliente

</br>

O segundo parâmetro é o "res"
* Significa "resposta". É a resposta que o SERVIDOR da para o cliente

> REQ = A gente recebe    |   RES = A gente retorna 

</br>

____________________________________________________________________

## Importância e obrigatoriedade do `end()`
Uma das propostas do SERVIDOR feito aqui pelo NODE, é principalmente a segurança que temos.
Você pode ver que, criamos um localhost, e mesmo alterando a string aqui dentro do VS code e dando um F5 na página do "localhost:4242", o que está lá não irá mudar. 
Isto ocorre pois é um servidor, ou seja, já definimos o que será rodado, por isso o método "end()" em nossa aplicação é importante, pois ele quem irá finalizar os serviços do servidor. Além disto, o método "end()" também  é usado para indicar ao cliente que não há mais dados a serem enviados e que a conexão pode ser fechada. Assim, o "end()" é útil para gerenciar a conexão de rede de maneira eficiente, evitando desperdício de recursos e melhorando o desempenho do aplicativo.

</br>

## Importância da porta - `listen()`
A definição de uma porta é importante porque é através dela que o servidor e o cliente se comunicam na rede. A porta é uma identificação única de um serviço na rede que especifica qual aplicativo ou serviço deve processar uma requisição.

No exemplo acima, estamos especificando a porta 4242 para o nosso servidor. Isso significa que o servidor estará escutando as conexões na porta 4242 e qualquer requisição enviada para essa porta será processada pelo servidor. Assim, a definição da porta permite que o servidor saiba em qual endereço e porta ele deve escutar as conexões de rede.