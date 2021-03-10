function MeuObjeto() {}

console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.__proto__ === obj2.__proto__) //retorna true, pois quando um objeto é instanciado a partir da função eles são iguais.
console.log(MeuObjeto.prototype === obj1.__proto__) //retorna true, pois quando um objeto é instanciado a partir da função eles são iguais.

MeuObjeto.prototype.nome = 'Teste'
MeuObjeto.prototype.falar = function () {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar() //retorna Bom dia! Meu nome é Teste! | pois ele herdou do protorype do objeto MeuObjeto()
obj2.nome = 'Joao' //sobrescrevendo o atributo nome
obj2.falar() //irá retornar Bom dia! Meu nome é Joao!

console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype) //retorna true, pois quando um objeto é instanciado a partir da função eles são iguais.
console.log(MeuObjeto.__proto__ === Function.prototype) //retorna true, pois quando um objeto é instanciado a partir da função eles são iguais.
console.log(Function.prototype.__proto__ === Object.prototype) //retorna true
console.log(Object.prototype.__proto__ === undefined)//retorna false