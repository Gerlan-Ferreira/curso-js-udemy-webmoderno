calcularSalario = (planoDeTrabalho, salarioAtual) => {

    switch(planoDeTrabalho){

        case 'A':
            console.log(`Aumento de 10%. Seu novo salário será: R$${salarioAtual + (salarioAtual * 0.1)}`)
            break
        
        case 'B':
            console.log(`Aumento de 15%. Seu novo salário será: R$${salarioAtual + (salarioAtual * 0.15)}`)
            break
        case 'C':
            console.log(`Aumento de 20%. Seu novo salário será: R$${salarioAtual + (salarioAtual * 0.2)}`)
            break
        default:
            console.log('Plano inválido')
    }
}

calcularSalario('A', 2500)
calcularSalario('B', 3000)
calcularSalario('C', 4000)
calcularSalario('D',1)
calcularSalario('E',2)
