// Função sem retorno
function imprimirSoma(a, b) {

    console.log(a + b)

}

imprimirSoma(2,3)

imprimirSoma(2) //valor será undefined, somando ele retornará um NaN pois somar inteiro com undefined da isso.


//Função com retorno
function soma(a, b = 0) {

    return a + b

}

console.log(soma(2,3))