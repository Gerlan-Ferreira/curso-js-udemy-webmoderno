(totalNumerosNegativos = () => {

    const valores = [-1,-2,-3,-4,1,2,3,4,5,6]
    let contNumNegativos = 0

    for (let i = 0; i < valores.length; i++){

        if (valores[i] < 0){
            contNumNegativos++
        }
    }

    console.log(`Total de numeros negativos = ${contNumNegativos}`)
})()