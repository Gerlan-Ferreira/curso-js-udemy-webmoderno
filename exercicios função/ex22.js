calcularAnuidade = (mes, valorAnuidade) => {


    if (mes == 1) {

        console.log('O valor a pagar é: R$' + valorAnuidade)

    } else if (mes >= 2 && mes <= 12) {

        valorAPagar = valorAnuidade * ((1 + (5 / 100)) ** mes)

        console.log('O valor a pagar é: R$' + valorAPagar)

    }
    else if (mes < 1 || mes > 12) {

        console.log('Esse mês não existe no calendário. Informe de 1 - 12')

    }
}

calcularAnuidade(1, 250)
calcularAnuidade(2, 250)