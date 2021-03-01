// let vetor = [1, 2, 3, 4, 5]

// function multiplicaVetor(vetor, multiplicador){
//     let vetorResultado = []
//     vetor.forEach(elemento => {
//         vetorResultado.push(elemento * multiplicador) 
//     });

//     return vetorResultado
// }

// console.log(multiplicaVetor(vetor, 3))



vetorNumerico = (numeros, valor_multiplica) => {
    
    let result = []

    for (let i = 0; i < numeros.length; i++){
        
        result.push(numeros[i] * valor_multiplica) 
    }

    return result

}

vetorMultiplica = (valor_multiplica) => {
    let result2 = []
    for (let i = 0; i < numeros.length; i++){
        
        if (numeros[i] > 5){

            result2.push(numeros[i] * valor_multiplica) 
        }
    }
    return result2

}

console.log(vetorNumerico([1,2,3,6],2))