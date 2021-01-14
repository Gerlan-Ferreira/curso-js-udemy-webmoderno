//exemplo 1 de função antiga
let dobro = function (a) {
    
    return 2 * a
}

//exemplo 1 da arrow function
dobro = (a) => {

    return 2 * a
}

//exemplo 2 arrow function
dobro = a => 2 * a //quando só tem um parametro pode ser retirado os parenteses. Nesse caso o return está implícito
console.log(dobro(Math.PI).toFixed(2))

//ex 2 função antiga

let ola = function(){

    return 'olá'
}

//ex 3 da arrow function
ola = () => 'olá'
