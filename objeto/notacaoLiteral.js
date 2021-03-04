const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c } //forma de dizer alterar o nome dos atributos do objeto e apontar eles para as variaveis

const obj2 = { a, b, c } //Nesse caso os atributos já estão sendo referenciados com o mesmo nome das constantes, caso queira usar 
//outro nome no atributo, usar a forma anterior.

console.log(obj1, obj2) //irá retornar no console { a: 1, b: 2, c: 3 } { a: 1, b: 2, c: 3 }

//Atribuindo um atributo e valor a um objeto vazio a partir duas constantes, o atributo vai entre colchetes [] e o valor depois do igual

const nomeObj = 'nota'
const valorObj = 6.66

const obj3 = {}

obj3[nomeObj] = valorObj

console.log(obj3) //será retornado { nota: 6.66 }

//Outra forma de fazer o que foi citado anteriormente
const obj4 = { [nomeObj]: valorObj }

console.log(obj4)//será retornado { nota: 6.66 }

//Declarando funções dentro do objeto, a primeira é a forma antiga e a segunda é usando o novo ES6

const obj5 = {
    funcao1: function () {
        //...
    },
    funcao2() {
        //...
    }
}

console.log(obj5) //Será retornado { funcao1: [Function: funcao1], funcao2: [Function: funcao2] }
