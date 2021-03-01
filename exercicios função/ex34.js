// comparaStrings = (string1, string2) => {
//     if(string1.includes(string2.toUpperCase()) || string2.includes(string1.toUpperCase())){
//         return true
//     }else {
//         return false
//     }
// }

// console.log(comparaStrings('ABCD', 'cbad'))

function verificacaoDeString (string1, string2) {
    let estaContido = true;
    for (let i = 0; i < string1.length; i++) {
        let caractereString1 = string1.charAt(i).toLowerCase()
        for(let j = 0; j < string2.length; j++){
            let caractereString2 = string2.charAt(j).toLowerCase()
            if(caractereString1 == caractereString2) {
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }
        if(!estaContido) {
            return estaContido
        }
    }
    return estaContido
 }

 console.log(verificacaoDeString('abc','abcdefg'))

 