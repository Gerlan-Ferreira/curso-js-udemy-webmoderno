const numeros = [1,2,3,4,5,6,7,8,9,10]

for (let x in numeros){

    if (x == 5) {
        
        break

    }    
    console.log(`${x} - x = ${numeros[x]}`)
}

for (let y in numeros){

    if (y == 5) {
        
        continue

    }    
    console.log(`${y} - y = ${numeros[y]}`)
}

//for rotulado

externo: for (a in numeros){

    for (b in numeros){

        if (a == 2 & b == 3) break externo
        console.log(`Par: ${a},${b}`)
    }
}