//estrategia 1 para gerar valor padrão

function soma1 (a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1

    return a + b + c

}

console.log(soma1()) //irá retornar a soma do valor padrão 1, pois não passei nenhum valor como parâmetro

console.log(soma1(), soma1(3), soma1(1,2,3))

// estrategia 2, 3, 4

function soma2(a, b, c){

    a = a !== undefined ? a : 1 //caso seja diferente de undefined ele irá assumir o valor de a se não ele assume o valor 1.
    b = 1 in arguments ? b : 1 //dentro de arguments existe o valor do indice 1 que é b, se não ele assume o valor de 1.
    c = isNaN(c) ? 1 : c //se o valor de não for um número irá receber o valor padrão que é 1, caso não recebe o valor de c.
    return a + b + c
}

console.log(`função soma2 =  ${soma2()}, ${soma2(3)}, ${soma2(1,2,3)}, ${soma2(0,0,0)}`)

//valor padrão ES15(Ecma Script 2015)

function soma3(a = 1, b = 1, c = 1){

    return a + b + c
}

console.log(`função soma3 =  ${soma3()}, ${soma3(9)}, ${soma3(3,4,5)}, ${soma3(0,0,0)}`)