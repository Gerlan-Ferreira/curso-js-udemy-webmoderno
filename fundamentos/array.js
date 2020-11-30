const valores = [7.7, 8.9, 6.3, 9.2]

console.log(valores[0], valores[3])

valores[4] = 10

console.log(valores)

console.log(valores.length) //tamanho do array

valores.push('teste') //add elementos no array

console.log(valores)

valores.pop() //removendo o ultimo elemento do array

console.log(valores)

delete valores[0] //removendo um elemento específico do array

console.log(valores)

console.log(typeof valores) //tipo do array que irá retornar object