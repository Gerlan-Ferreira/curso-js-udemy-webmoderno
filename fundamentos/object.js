//O objeto em JS é uma coleção de pares de chaves e valores

const prod1 = {} //declarando um object

prod1.nome = 'CelularUltraMega' //criando um atributo dinamicamente no objeto
prod1.preco = 666.25

prod1['DescontoTeste'] = 100 //outra forma de criar um par de chave e valor no objeto

const prod2 = { //Objeto aninhado com ramificações, ou seja, objeto dentro de objeto.

    nome: 'Camisa',
    preco: 79.90,

    objSub: {
        teste: 1,

        objSub: {
            teste: 2

        }

    }
}

console.log(prod1, prod2)