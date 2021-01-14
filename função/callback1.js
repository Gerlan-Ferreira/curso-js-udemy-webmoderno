const fabricantes = ["Mercedes", "Audi", "Ford"]

function imprimir (nome, indice){

    console.log(`${indice + 1}, ${nome}`)

}

fabricantes.forEach(imprimir) //chamando a função callback, ou seja, chamando de volta

fabricantes.forEach(fabricante=> console.log(fabricante)) //outro exemplo de call back no qual nesse ele ira imprimir só o nome