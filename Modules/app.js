// Esta importação nos permite comunicar com o outro arquivo JS

// Importando o arquivo "calcs"  (o arquivo possui 3 funções arrow)
const calcs = require('./calcs.js')

// Obtendo as funções do arquivo "calcs.js"
const multiplicar = calcs.multiplication
const subtrair = calcs.subtraction
const somar = calcs.sum

// Realizando alguns testes
console.log(somar(4,5))
console.log(subtrair(5,1))
console.log(multiplicar(4,2))




