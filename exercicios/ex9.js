
alunos = (nota) => {
    
    let notaArredondada = arredondaNota(nota)

    if(notaArredondada >= 40 && notaArredondada <= 100){
        console.log(`Aprovado e a nota foi: ${notaArredondada}`)
        
    }else if (notaArredondada >= 0 && notaArredondada < 40){

        console.log(`Reprovado e a nota foi: ${notaArredondada}`)

    } else if (notaArredondada < 0 || notaArredondada > 100){

        console.log(`Nota inválida : ${notaArredondada}`)
    }
}

arredondaNota = (nota) => {

    if (nota >= 0 && nota < 38){

        return nota

    } else if ((nota - nota % 5) >= 3 && nota >= 38 && nota <= 100){

        return Math.ceil(nota / 5) * 5 //retorna a nota arredondada pelo proximo multiplo de 5

    } else if (nota < 0 || nota > 100){

        return nota
    }
}

alunos(84)
alunos(37)
alunos(100)
alunos(-1)
alunos(101)