const pessoa = {
    nome: 'teste',
    idade: 15,
    peso: 100
}

console.log(Object.keys(pessoa)) //irá retornar todas as chaves do objeto -> [ 'nome', 'idade', 'peso' ]

console.log(Object.values(pessoa)) //irá retornar todas os valores das chaves do objeto -> [ 'teste', 15, 100 ]

console.log(Object.entries(pessoa)) //irá retornar todas as chavez/valores do objeto -> [ [ 'nome', 'teste' ], [ 'idade', 15 ], [ 'peso', 100 ] ]

//Percorrendo todo o array gera a partir do Object.entries(pessoa), ou seja o objeto foi transformando em um array de chave e valor
Object.entries(pessoa).forEach(element => {

    console.log(`${element[0]}: ${element[1]}`)

});

console.log('===================')

//Mesma coisa de anteriormente porém utilizando o destructuring em vez do element do forEach
Object.entries(pessoa).forEach(([chave, valor]) => {

    console.log(`${chave}: ${valor}`)

});

//Definindo uma propriedade para o objeto. No caso serve para caso eu possa definiir caracteristicas de alguma propriedade
//por exemplo, a propriedade pessoa.nome pode ou não ser alterada, ela ficará ou não visível quando fizer o Object.keys()
Object.defineProperty(pessoa, 'dataNascimento', {

    enumerable: true, //siginifica que ela estará passiva a ser listada quando firzer o Object.keys()
    writable: false, //poderá ser alterada, se false não pode e se true pode.
    value: '26/02/1998'

})
pessoa.dataNascimento = '01/01/2020' //tentando alterar o valor dessa propriedade, logo não será possível pois defini a característica  writable: false
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa)) //listando, será possível visto que defini a característica  enumerable: true

//Object.assign (ECMAScript 2015 ou ES6)
const dest = { a: 1 }
const o1 = { b: 2}
const o2 = { c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) //Utilizando o assign no qual eu informo o primeiro objeto que é o de destino e 
                                        //depois os outros objetos que será inseridos dentro do de destino, eles irão concatenar 
                                        //e pertencer a esse objeto destino. Caso algum atributo entre os objetos tenha o mesmo nome, 
                                        //o valor será sobrescrito pelo valor do ultimo objeto.
console.log(dest)
