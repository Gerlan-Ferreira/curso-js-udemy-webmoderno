//Usando o destructuring com arrays. No array o que representa o destructuring são os colchetes []

//Ex1 array de uma posição
const [a] = [20]
console.log(a)

//Ex2 array com mais de uma posição e atribuindo valores padrões aos indices
const [n1, , n3, n4 = 666, , n5] = [1, 2, 3]
console.log(n1, n3, n4, n5)

//Ex3 array com duas dimensões. Ignorando o primeiro array, ignorando o primeiro indice do segundo array 
//e pegando o segundo valor desse ultimo array.
const [, [, notas]] = [ [, 8, 8], [9, 10, 11] ]
console.log(notas)

