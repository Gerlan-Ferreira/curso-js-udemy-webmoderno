//O operador ternário tem 3 operandos. Nesse exemplo abaixo se a nota >= 7 que é o primeiro operando 
//se for VERDADEIRO ele irá retornar Aprovado, se for FALSO retornara Reprovado.
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(10))

console.log(resultado(6))