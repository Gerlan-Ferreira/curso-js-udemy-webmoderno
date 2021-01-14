let comparaComThis = function (a){

    console.log(this === a) //comparando se o this é estritamente(valor e tipo iguais) igual ao parametro "a"
}

comparaComThis(global) //passando o objeto global como parâmetro



const obj = {}
comparaComThis = comparaComThis.bind(obj) //passando como parametro o objeto "obj"

comparaComThis(global) //ao executar novamente a função passando o global como parametro irá retornar false devido ao obj

comparaComThis(obj) //passando o obj como param de novo retorna true

//comparando se o this é estritamente igual ao parametro usando arrow function
let comparaComThisArrow = param => console.log(this === param)

comparaComThisArrow(global) //irá retornar false, pq a arrowfuction não varia, ela mantém.

comparaComThisArrow(module.exports)  //irá retornar true, pois ele aponta para fora dos modulos do Node

