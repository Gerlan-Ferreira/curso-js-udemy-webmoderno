//O call e o apply são métodos/formas de como executar/chamar uma função.


function getPreco(imposto = 0, moeda = 'R$'){

    return `${moeda} ${this.preco * (1 - (this.desc / 100)) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 15,
    getPreco
}
global.preco = 20
global.desc = 10
console.log(getPreco())
console.log(produto.getPreco())

const carro = { preco: 49990, desc: 20 }

//usando o call
//no call eu passo os parametros que pode ser executado na função, 
//primeiro o contexto que foi o objeto carro, e os parametros da função, que foi o desconto e a moeda
console.log(getPreco.call(carro))
console.log(getPreco.call(carro, 17, '$')) 

//usando o apply
//mesma coisa que o call, diferença é que vou ter um array com todos os parametros
console.log(getPreco.apply(carro))
console.log(getPreco.apply(carro, [17, '$']))