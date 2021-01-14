const pessoa = {

    saudacao: 'Boa noite!',
    falar() {
        console.log(this.saudacao)
    }

}

pessoa.falar()

const falarDePessoa = pessoa.falar.bind(pessoa) //o bind vc passa um objeto no qual seja resolvido pelo this

falarDePessoa()