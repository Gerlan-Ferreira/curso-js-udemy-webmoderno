(vetores = () => {

    const vetorInteiro = [1, 2, 3, 4]
    const vetorString = ['a', 'b', 'c', 'd']
    const vetorDouble = [1.1, 2.2, 3.3, 4.4]

    console.log('Forma 1: ' + vetorInteiro.concat(vetorString, vetorDouble))
    console.log('Forma 2: ' + vetorString.concat(vetorDouble).concat(vetorInteiro))
    
})()