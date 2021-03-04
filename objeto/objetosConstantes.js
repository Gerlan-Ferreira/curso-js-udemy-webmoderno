const pessoa = {
    nome: 'Teste'
}

pessoa.nome = 'Gerlan'

Object.freeze(pessoa) //Essa função faz com que eu não possa alterar nada no objeto, ou seja, ele está congelado. Não deixa add atributo novo
                    //nem deletar, nada mesmo.

pessoa.nome = 'João' //no console irá retornar o valor atribuido na linha 5 já que na linha 7 eu congelei ele.

console.log(pessoa.nome)