//Exemplo de classe
class Pessoa{

    constructor(nome){

        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)   
    }
}

const p1 = new Pessoa('Gerlan')
p1.falar()


//Exemplo de Factory
const criarPessoa = nome => {
    return {

        falar: () => console.log(`Meu nome é ${nome}`) 
        //Pelo motivo da factory retornar um objeto ele tem um acesso mais abrangente e com isso não precisa informar o this 
        //para acessar a variavel que foi criada.
    }
}

const p2 = criarPessoa('Chico')
p2.falar()