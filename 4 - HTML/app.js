const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

// __dirname é para mostrar que iremos pegar um arquivo que está em nosso diretório, ou seja "4 - HTML"

// Não há necessidade de usar o "res.end()", ele é utilizado quando sua rota "não sabe" o que fazer
// mas neste caso é uma função, simples, a rota irá simplesmente enviar o arquivo "index.html"


app.listen(4343);