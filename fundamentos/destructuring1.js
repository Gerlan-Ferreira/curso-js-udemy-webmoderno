//novo recurso do ES15, o desctructuring é utilizado para retirar dados de uma estrutura, pode ser um objeto, array, ou seja,
//desestruturar

const pessoa = {

    nome: 'Gerlan',
    idade: 22,
    endereco: {
        logradouro: 'Rua Teste',
        numero: 666
    }
}
//No objeto o que representa o destructuring são as chaves {}

//Ex1 do destructuring tirando nome e idade do objeto pessoa.
const { nome, idade} = pessoa
console.log(nome, idade)

//Ex2 tirando nome e idade do objeto pessoa e criando variáveis para esses atributos
const { nome: name, idade: anos } = pessoa
console.log(name, anos)

//Ex3 extraindo atributos que não existem no objeto pessoa, e atribuindo um valor padrão a esse atributo caso no objeto não possua esse atributo
const { sobrenome, sexo = 'M'} = pessoa
console.log(sobrenome, sexo)

//Ex4 extraindo atributos do objeto pessoa.endereco que é um objeto aninhado dentro de pessoa.

const {endereco: { logradouro, numero} } = pessoa
console.log(logradouro, numero)