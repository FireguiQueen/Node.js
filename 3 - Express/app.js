// Importando o Express
const express = require('express')


// Criando uma variável para ter acesso as funcionalidades do framework
var app = express()


// Rota
app.get('/', (req, res) => {
    res.write('Using express') 
    res.end()
})

// Servidor 
app.listen(4343)