(intervalor10e20 = () => {

    const vetor = [7,8,9,10,11,14,15,18,19,20,21,22,23]
    let contEntre10e20 = 0
    let contForaDe10e20 = 0

    for (let i = 0; i < vetor.length; i++){

        if (vetor[i] >= 10 && vetor[i] <= 20){
            contEntre10e20++

        }else{
            contForaDe10e20++
        }

    }
    console.log(`Total de numeros entre 10 e 20 = ${contEntre10e20}`)
    console.log(`Total de numeros fora do intervalo de 10 e 20 = ${contForaDe10e20}`)
})()