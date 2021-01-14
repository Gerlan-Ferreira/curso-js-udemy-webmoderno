notas = [1.1, 2.2, 4.5, 8.9, 9.6, 9.7, 8.5]

//sem callback
let notasBaixas1 = []

for (let i in notas){
    if (notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

//com callback
notasBaixas2 = notas.filter(function(nota){
//Nessa função filter ele faz tipo uma filtragem mesmo, no qual passo por parametro alguma coisa, nesse
//caso eu passei uma função que retorna true ou false, caso true ele add o valor ao array e caso false ele nao add.
    return nota < 7
}) 
console.log(notasBaixas2)


//callback usando arrow function
notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)