calculadora = (num1, num2, operacao) => {

    switch(operacao){

        case '+':
            console.log(`${num1} + ${num2} = ${num1 + num2}`)
            break
        
        case '-':
            console.log(`${num1} - ${num2} = ${num1 - num2}`)
            break
        
        case '*':
            console.log(`${num1} x ${num2} = ${num1 * num2}`)
            break
        
        case '/':
            console.log(`${num1} / ${num2} = ${num1 / num2}`)
            break
        
        default:
            console.log('Operador inválido. Informe alguns dos operadores (+ , - , * e /)')
            break
        
    }
}

calculadora(100,90,'+')
calculadora(200,100,'-')
calculadora(10,10,'*')
calculadora(350,10,'/')
calculadora(350,10,'&')
calculadora(350,10,'%')
calculadora(350,10,'$')