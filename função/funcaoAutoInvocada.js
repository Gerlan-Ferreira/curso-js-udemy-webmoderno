//IIFE - Imediately Invoked Function Expression

/*Função auto invocada, usada pra fugir do escopo global. Pode definir constante, variavel, funções 
dentro dessa função e estará disponível somente dentro dessa função.*/
(function(){

    console.log('Será executado na hora!')
    console.log('Foge do escopo global')
    
})()