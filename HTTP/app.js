// Importando o módulo "HTTP" (nós não o criamos, ele já existe por padrão no Node.js)
const http = require('http');



// Criando um servidor utilizando este módulo (iremos passar dois parâmetros)

// -> O primeiro parâmetro é o "req"
// Significa "requerimento". É quando o SERVIDOR está recebendo informações do cliente


// -> O segundo parâmetro é o "res"
// Significa "resposta". É a resposta que o SERVIDOR da para o cliente

// REQ = A gente recebe    |   RES = A gente retorna 

// O SERVIDOR precisa rodar numa porta, então iremos passar o método "listen()"
http.createServer(function(req, res){
    res.write('Olá, atualmente estou aprendendo Node.js ;)')
    res.end() // serve para finalizarmos o servidor
}).listen(4242)
