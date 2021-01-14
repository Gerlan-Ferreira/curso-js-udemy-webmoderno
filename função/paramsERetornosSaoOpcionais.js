function area(lag, alt){

    const area = lag * alt

    if (area > 20){
        console.log(`Valor acima do permitido: ${area}m2`)
    }else {
        return area
    }
}

console.log(area(30, 2))