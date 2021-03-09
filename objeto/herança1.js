const ferrari = {

    modelo: 'F40',
    velMax: 324

}

const volvo = {

    modelo: 'V40',
    velMax: 200

}

console.log(ferrari.__proto__) //Acessando o prototipo do objeto ferrari, ou seja o objeto pai.
console.log(ferrari.__proto__ === Object.prototype) //testando a situaçao no qual o __proto__ aponta para Object.prototype
console.log(Object.prototype.__proto__) //verificando se após o Object.prototype existe um objeto superior a ele.
console.log(Object.prototype.__proto__ === null) //irá retornar true


