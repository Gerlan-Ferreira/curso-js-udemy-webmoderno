// fatorial = (num) => {
    
//     fatorial = 1

//     for (let i = 1; i <= num; i++){

//         if (num == 0){
//             return 1
//         }else {
//         fatorial = fatorial *  i
//         }
           
//     }
//     console.log(fatorial)

// }
// fatorial(10)
function fatorial (numero) {
    if(numero == 0){
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}

console.log(fatorial(5))