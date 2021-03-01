valoresImpares = (inicio = 0, fim = 100) => {

    if (inicio > fim){
        
        auxInicio = inicio
        auxFim = fim

        fim = auxInicio
        inicio = auxFim

    }

    for (let i = inicio; i <= fim; i ++){

        if (i%2 != 0){
            console.log('Impares: ' + i)
        }

    }
    
}

valoresImpares(50, 100)
console.log('--------------')
valoresImpares(100, 50)

