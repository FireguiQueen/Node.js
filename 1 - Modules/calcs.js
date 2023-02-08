const ERROR = "Por favor, certifique-se de colocar dois números nos argumentos da função -> (4, 4)"

const sum = (n1, n2) => isNaN(n1 + n2)? ERROR : `A soma entre ${n1} e ${n2} é.: ${n1 + n2}`  

const subtraction = (n1, n2) => `A subtração entre ${n1} e ${n2} é.: ${n1 - n2}` 

const multiplication = (n1, n2) => `A multiplicação entre ${n1} e ${n2} é.: ${n1 * n2}` 


module.exports = {
    sum, subtraction, multiplication
}