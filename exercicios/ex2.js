triangulos = (a = 0,b = 0,c = 0) => {

    if (a === b && b === c){
        console.log('Equilatero')

    } else if (a !== b && b !== c && c !== a) {
        console.log('Escaleno')

    } else{
        console.log('Isosceles')
    }
}

triangulos(1,1,1)
triangulos(1,2,2)
triangulos(1,2,3)