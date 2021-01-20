(valorQuebrado = (a) => {
    
    resultado = a.toFixed(2).toString().replace(".", ",")
    
    
    return console.log(`R$ ${resultado}`)

})(0.30000000000000004)