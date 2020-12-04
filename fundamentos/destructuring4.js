//Funçao usando o destructuring como parametro da função em forma de array. Essa função retornará numeros randômicos

const { randomFill } = require("crypto")

function random([min = 0, max = 1000]) {

    //Invertendo os valores com o destructuring caso o valor mínimo seja maior que o valor máximo 
    if (min > max) [min, max] = [max, min]

    const valor = Math.random() * (max - min) + min

    return Math.floor(valor) //arredondando para baixo com o Math.floor()


}

//Passando dois atributos para serem usados pela função
console.log(random([30, 40]))

/**
 * Passando apenas um atributo, nesse caso o valor minimo maior que o máximo para ver que a condição feita dentro da função
 * de trocar o valor minimo com o valor máximo, caso ele seja maior que o máximo funciona mesmo. */
console.log(random([1500]))

//Passando apenas o segundo atributo que é o máximo
console.log(random([, 70]))

//Passando array vazio, assim ele pega os valores padrões passados como parâmetro
console.log(random([]))