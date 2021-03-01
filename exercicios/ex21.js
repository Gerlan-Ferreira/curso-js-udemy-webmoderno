calcularValorPlanoSaude = (idade) => {
    
    if (idade < 10) {
        valorPlano = 100 + 80
        console.log('Criança menor que 10 paga R$100,00 + R$80,00 de adicional = R$' + valorPlano)

    } else if (idade >= 10 && idade <= 30) {
        valorPlano = 100 + 50
        console.log('Conveniados entre 10 e 30 anos pagam R$100,00 + R$50,00 de adicional = R$' + valorPlano)

    } else if (idade >= 30 && idade <= 60) {
        valorPlano = 100 + 95
        console.log('Conveniados de 30 até 60 anos pagam R$100,00 + R$95,00 de adicional = R$' + valorPlano)

    } else if (idade > 60) {
        valorPlano = 100 + 130
        console.log('Conveniados acima de 60 anos pagam R$100,00 + R$130,00 de adicional = R$' + valorPlano)
    }
}

calcularValorPlanoSaude(8)
calcularValorPlanoSaude(22)
calcularValorPlanoSaude(45)
calcularValorPlanoSaude(66)