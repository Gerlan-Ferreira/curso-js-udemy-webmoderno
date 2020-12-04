//Funçao usando o destructuring como parametro da função em forma de objeto.
//Essa função retornará numeros randômicos

function randomica({ min = 0, max = 1000 }) {

    const valor = Math.random() * (max - min) + min

    return Math.floor(valor)
}
//Destructuring passando valores de um objeto de fora
const obj = { min: 40, max: 50 }
console.log(randomica(obj))

//passando apenas o valor de um atributo
console.log(randomica({ min: 955 }))

//passando objeto vazio
console.log(randomica({}))