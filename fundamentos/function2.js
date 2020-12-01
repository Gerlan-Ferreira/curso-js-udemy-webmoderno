//armazenando uma função em uma variável
const imprimirSoma = function(a, b) {

    console.log(a + b)

}

imprimirSoma(2,4)

//Armazenando uma função arrow ou arrow function em uma variável
const soma = (a, b) => {

    return a + b
}

console.log(soma(2,8))

//retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(10, 9))

//outra maneira de retorno implícito
const imprimir2 = a => console.log(a)
imprimir2('Teste')
