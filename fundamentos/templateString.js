const nome =  'Galego'

//Reconhece espaços, quebras de linha, dentre outras coisas. Sem precisar realizar concatenacao
const template = 
`
    Olá 
    ${nome}!
`
console.log(template)

//expressões aritméticas
console.log(`1 + 1 = ${1 + 1}`)

//Função com template string
const up = texto => texto.toUpperCase()

console.log(`Ei...${up('cuidado')}!`)