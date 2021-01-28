VerificaAnoBissexto = (ano) => {
    if (ano % 400 == 0 ){
        console.log(`O ano de ${ano} é Bissexto!`)
        return console.log(true)
    } else if (ano % 4 == 0 && ano % 100 != 0){
        console.log(`O ano de ${ano} é Bissexto!`)
        return console.log(true)
    } else {
        console.log(`O ano de ${ano} NÃO é Bissexto!`)
        return console.log(false)
    }
}

VerificaAnoBissexto(0)
VerificaAnoBissexto(2016)
VerificaAnoBissexto(2100)
VerificaAnoBissexto(2000)
