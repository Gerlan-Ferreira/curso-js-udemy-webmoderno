(maiorEMenorValorDoArray = () => {

    const valores = [-1,2,3,4,5,6,7,8,9,10,12,14]
    let menor = 0
    let maior = 0

    for (let i = 0; i < valores.length; i++){

        menorValor = Array.min = function(array){
            return Math.min.apply(Math, array)
        }
            
        menor = menorValor(valores)

        maiorValor = Array.max = function(array){
            return Math.max.apply(Math, array)
        }
            
        maior = maiorValor(valores)
      
    }
    console.log(`Maior valor : ${maior} e Menor valor: ${menor}`)

})()