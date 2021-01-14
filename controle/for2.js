const notas = [5.5,6.7,8.9,9.6,4.2,3.6]

for (let i in notas){

    console.log(`[${i}] -> nota = ${notas[i]}`)

}

const pessoa = {

    nome: 'Gerlan',
    sobrenome: 'Ferreira',
    idade: 22,
    peso: 90
}

for (let atributo in pessoa){

    console.log(`${atributo} = ${pessoa[atributo]}`)

}