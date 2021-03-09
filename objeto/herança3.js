const pai = { nome: 'Pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai) //criando um objeto para a constante filha1 que nesse caso ira pegar todos os dados do objeto pai{}
filha1.nome = 'Ana'
console.log(filha1.corCabelo) //retona preto pois ela herdou do objet pai{}

//criando um objeto para a constante filha1 que nesse caso ira pegar todos os dados do objeto pai{}
//e também add outro atributo dentro dele e junto as propriedades dele.
const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome) //retornará Bia
filha2.nome = 'Carla' //nao sera possivel alterar visto que informei a propriedade writable: false
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`) //retornará Bia tem cabelo preto

//lembrando que so consigo varrer todos os atributos do objeto filha pois informei a propriedade  enumerable: true
for (let key in filha2) {

    //Essa funcao hasOwnProperty ela verifica se o atributo pertence a aquele objeto. Nesse caso eu 
    //verifico se ele pertence, caso sim imprimo ele e caso não imprimo a quem ele pertence na herança.
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`)
    //Será retornado no console =  nome Por herança corCabelo
}