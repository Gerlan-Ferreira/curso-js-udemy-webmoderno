//Efeito de hoisting que o interpetrador do JS joga a variável para "cima".
//Nesse exemplo abaixo em outras linguagens daria erro, mas no JS será impresso o valor
//undefined no primeiro console e depois será inserido o valor 2 no outro console.log
console.log('a = ', a)

var a = 2

console.log('a = ', a)