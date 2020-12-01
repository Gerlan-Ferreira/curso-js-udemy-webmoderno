let valor //não inicializada irá ser retornado o undefined

console.log(valor)

valor = null //null representa a ausência de valor

console.log(valor)

// console.log(valor.toString()) //vai da erro

const produto = {}

console.log(produto.preco) //irá retornar undefined

produto.preco = 6.66

console.log(produto)

produto.preco = undefined //evitar atribuir undefined, se for limpar um objeto jogar null ou 0

console.log(produto)

produto.preco = null

console.log(produto)
