//Função factory
function criarFuncionario (nome, salarioBase, faltas) {

    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){

            return (salarioBase / 30) * (30 - faltas)
        }

    }

}

const func1 = criarFuncionario('Gerlan', 3800, 1)
const func2 = criarFuncionario('Gean', 3200, 5)

console.log(func1.getSalario().toFixed(2), func2.getSalario().toFixed(2))

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Função famosa que retorna um objeto a partir de  um JSON
const fromJSON = JSON.parse('{"info": "Sou JSON"}')
console.log(fromJSON.info)

