baskara = (a, b, c) => {

    delta = Math.pow(b,2) - 4 * a * c
    x1 = (- b + (Math.sqrt(delta))) / 2 * a
    x2 = (- b - (Math.sqrt(delta))) / (2 * a)

    if(delta < 0){
        console.log(`O delta é negativo = ${delta}`)
    } else{
        console.log(`O valor do x1 é: ${x1} e o valor do x2 é: ${x2}`)
    }
}

baskara(1, 1, -2)
baskara(1, -1, 4)