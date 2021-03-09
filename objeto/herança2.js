//Cadeia de prototipos {prototype chain}

const { violet } = require("color-name")

const avo = { atributo1: 'A' }

const pai = { __proto__: avo, atributo2: 'B' }

const filho = { __proto__: pai, atributo3: 'C' }

//Nesse caso faço com que o objeto Filho varra toda a cadeia de prototipos e mostre o atributo que herdou
//do seu avo e seu pai e o dele mesmo,e no atributo0 ele vai no Object.prototype que nesse caso retorna 
//undefined
console.log(filho.atributo0, filho.atributo1, filho.atributo2, filho.atributo3)

const carro = {
    velAtual: 0,
    velMax: 200,

    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }

    },
    status(){
        return `${this.velAtual}KM/h de ${this.velMax}KM/h`
    }

}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //no momento que eu informar que o objeto ferrari tera o prototype do objeto carro,
                //esse atributo velMax sobrepõe o do objeto carro.
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}` //uso o super para referenciar o meu prototype superior, que no caso é do objecto carro.

    }
}

//Nessa função eu estabeleço uma relação entre objeto e protótipo.
//O primeiro parametro é o objeto(ferrari) e o segundo o protótipo (carro).
//Portanto ferrari tem como protótipo o objeto carro, logo ele herdou todos os seus atributos e métodos.
Object.setPrototypeOf(ferrari, carro) 
Object.setPrototypeOf(volvo, carro) 

console.log(ferrari) //retorna { modelo: 'F40', velMax: 324 }
console.log(volvo) //retorna { modelo: 'V40', status: [Function: status] 

volvo.acelerarMais(100) //usando um metodo que esta dentro do prototipo carro que volvo herdou dele
console.log(volvo.status()) //retorna V40: 100KM/h de 200KM/h


ferrari.acelerarMais(300)
console.log(ferrari.status()) //retorna 300KM/h de 324KM/h