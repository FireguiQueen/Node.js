// Importando o módulo "HTTP" (nós não o criamos, ele já existe por padrão no Node.js)
const http = require('http');



// Criando um servidor utilizando este módulo (iremos passar dois parâmetros)

// O SERVIDOR precisa rodar numa porta, então iremos passar o método "listen()"
http.createServer(function(req, res){
    res.write('Olá, atualmente estou aprendendo Node.js ;)')
    res.end() // serve para finalizarmos o servidor
}).listen(4242)


