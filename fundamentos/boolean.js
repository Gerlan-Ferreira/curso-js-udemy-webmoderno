console.log('Abaixo expressões que resolvem para verdadeiros')

console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})//objeto literal
console.log(!!Infinity)

console.log('===================================================')

console.log('Abaixo expressões que resolvem para falsos')

console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)//Note a number
console.log(!!undefined)//não existe
console.log(!!(Infinity = false))

console.log('===================================================')

console.log('Finalizando...')

console.log(!!('' || null || 0 || ' '))

console.log('Exemplo pratico: ')
let nome = 'teste'
console.log(nome || 'desconhecido') //caso algum dos valores nao esteja valido, use a outra informação que é valida como valor padrão.
