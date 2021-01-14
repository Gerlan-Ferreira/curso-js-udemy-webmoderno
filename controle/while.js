function getInteiroAleatorioEntre(min, max) {

    const valor = Math.random() * (max - min) + min //gerando numero aleatorio entre o intervalor do max e min

    return Math.floor(valor) //retornando o valor arredondado
}

let opcao = 0

while (opcao != -1) {

    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima')
