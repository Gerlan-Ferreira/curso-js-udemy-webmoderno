// Uma factory é uma função que retorna um objeto, ou seja, uma instância do mesmo.

//Factory simples
function criarPessoa(){
    return {

        nome: 'Ana',
        sobrenome: 'Silva'

    }
}

console.log(criarPessoa())