const vetor1 = [1,3]
const vetor2 = [5,6]
trocarElementosArray = (vetor1, vetor2) => {
    
    let recebeVetor1 = []
    let recebeVetor2 = []
   
    for (let i = 0; i < vetor1.length; i++){
        
        recebeVetor1.push(vetor1[i])

    }

    for (let j = 0; j < vetor2.length; j++){

        recebeVetor2.push(vetor2[j])
    }

    console.log(recebeVetor1)
    console.log(recebeVetor2)

    //vetor1.push(recebeVetor2)
    //vetor2.push(recebeVetor1)

}

console.log(trocarElementosArray(vetor1, vetor2))