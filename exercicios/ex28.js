(totalParEImpar = () => {

    const paresEimpares = [2,3,4,5,6,7,8,9,10,12,14]
    let contPar = 0
    let contImpar = 0

    for (let i = 0; i < paresEimpares.length; i++){

        if (paresEimpares[i] % 2 == 0){
            
            contPar++

        } else {

            contImpar++
    }

}

    console.log(`Pares são um total de : ${contPar} e Ímpares são um total de: ${contImpar}`)

})()
