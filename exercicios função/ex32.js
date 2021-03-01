(mediaArray = () => {

    const numeros = [10, 10, 8]
    let somatorioArray = 0
    let totalNumerosArray = numeros.length

    for (let i = 0 ; i < numeros.length; i++){
        somatorioArray = somatorioArray + numeros[i]

    }
    console.log(`A média aritmética dos valores do array é: ${(somatorioArray / totalNumerosArray).toFixed(2)}`)
})()