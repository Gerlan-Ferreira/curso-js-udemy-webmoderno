jurosSimples = (capInicial, txJuros, tempoAplic) => {

    jurosSimples = capInicial * (txJuros / 100) * tempoAplic 
    return console.log('Juros simples é: ' + jurosSimples.toFixed(2))

}

jurosCompostos = (capInicial, txJuros, tempoAplic) => {

    jurosCompostos = capInicial * (1 + (txJuros / 100)) ** tempoAplic
    

    return console.log('Juros compostos é: ' + jurosCompostos.toFixed(2))

}
jurosSimples(1000, 10, 48)
jurosCompostos(2000, 4, 4)