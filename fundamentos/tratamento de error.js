function tratarErroELançar(erro){

    //throw new Error('Aguarde estamos verificando...')
    //throw 10
    //throw true
    throw 'mensagem'


}

function imprimirNomeMaiusculo(obj) {

    try{

        console.log(obj.name.toUpperCase() + '!!!')

    }catch(e){

        tratarErroELançar(e)

    } finally {

        console.log('Finally: Será executado independente se tem erro ou não')
    }

}

const obj = {nome: 'Gerlan'}
imprimirNomeMaiusculo(obj)