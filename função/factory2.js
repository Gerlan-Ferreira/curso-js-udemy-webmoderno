function criarProduto(nome, preco){

    return {
        nome: nome,
        preco: preco,
        desconto: 10/100
    }

}

console.log(criarProduto('cerveja amstel', 32))
console.log(criarProduto('cerveja budweiser', 48))