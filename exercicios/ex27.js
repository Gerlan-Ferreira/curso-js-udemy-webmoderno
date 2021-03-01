criancaAtentada =  (alturaPirrai1, taxaPirrai1, alturaPirrai2, taxaPirrai2) => {
    
    let contAnos = 0

    if (alturaPirrai1 < alturaPirrai2){

        while(alturaPirrai1 < alturaPirrai2){

            alturaPirrai1 = alturaPirrai1 + taxaPirrai1
            contAnos++
        }
        console.log('A criança 1 é menor que a 2 e ela ultrapassara a outra em: ' + contAnos + ' ano(s)')

    } else if (alturaPirrai1 > alturaPirrai2){

        while(alturaPirrai1 > alturaPirrai2){

            alturaPirrai2 = alturaPirrai2 + taxaPirrai2
            contAnos++
        }
        console.log('A criança 2 é menor que a 1 e ela ultrapassara a outra em: ' + contAnos + ' ano(s)')
        
    } else {
        console.log('As duas crianças tem a mesma altura')
    }

}

criancaAtentada(150, 4, 140, 10)