calculoFomeZero = (cod_prod, qtd_lache) => {

    switch(cod_prod){

        case 100:
            return `Valor a pagar em ${qtd_lache}x Cachorro Quente: R$${(qtd_lache *  3).toFixed(2).toString().replace('.',',')}`

        case 200:
            return `Valor a pagar em ${qtd_lache}x Hambúrguer Simples: R$${(qtd_lache *  4).toFixed(2).toString().replace('.',',')}`
        
        case 300:
            return `Valor a pagar em ${qtd_lache}x Cheeseburguer: R$${(qtd_lache *  5.5).toFixed(2).toString().replace('.',',')}`

        case 400:
            return `Valor a pagar em ${qtd_lache}x Bauru: R$${(qtd_lache *  7.5).toFixed(2).toString().replace('.',',')}`

        case 500:
            return `Valor a pagar em ${qtd_lache}x Refrigerante: R$${(qtd_lache *  3.5).toFixed(2).toString().replace('.',',')}`

        case 600:
            return `Valor a pagar em ${qtd_lache}x Suco: R$${(qtd_lache *  3).toFixed(2).toString().replace('.',',')}`

        default:
            return 'Produto inexistente!!!'
    }       
}

console.log(calculoFomeZero(100,5))
console.log(calculoFomeZero(200,3))
console.log(calculoFomeZero(300,2))
console.log(calculoFomeZero(400,4))
console.log(calculoFomeZero(500,6))
console.log(calculoFomeZero(600,1))
console.log(calculoFomeZero(700,15))