const  escola = "Cod3r"

console.log(escola.charAt(4)) //retorna o valor que está no quarto indice

console.log(escola.charCodeAt(3)) //retorna o valor na tabela ASC que está no terceiro indice

console.log(escola.indexOf('r')) //retorna em que indíce do array o valor informado está. Se retornar -1 é pq nao foi encontrado

console.log(escola.substring(0,3)) //retorna os dados que estão entre os indices que foram informados na função.

console.log(escola.concat("!!!")) //junção de dados

console.log(escola.replace(3,'e')) //sobrescrita de dados. No primeiro valor entre parentes informa qual dado vc quer substituir e no outro por qual valor vc quer que troque.

console.log('a,b,c'.split(',')) //quebra de dados transformando em array. Dentro do parenteses da função vc passa qual o separador