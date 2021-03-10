console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)
//todos esses acima, são funções, ou seja, do tipo Function

String.prototype.reverterString = function () {

    return this.split('').reverse().join('') //Quebrando a String com o split e invertendo a String com o reverse e depois juntando ela novamente.
}

console.log('Escola Cod3r'.reverterString())

Array.prototype.primeiroElementoDoArray = function () {

    return this[0]
}

console.log([1,2,3,4,5,6].primeiroElementoDoArray())
console.log(['a','b','c'].primeiroElementoDoArray())