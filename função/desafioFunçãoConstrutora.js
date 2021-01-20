// class Pessoa{

//     constructor(nome){

//         this.nome = nome
//     }

//     falar() {
//         console.log(`Meu nome é ${this.nome}`)   
//     }
// }

// const p1 = new Pessoa('Gerlan')
// p1.falar()

//Transformar essa classe anterior em uma função construtora, como no exemplo abaixo.
function Pessoa(nome = 'galego'){

   this.nome = nome

    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`)


    }

}

const p1 = new Pessoa('Misera')
p1.falar()
