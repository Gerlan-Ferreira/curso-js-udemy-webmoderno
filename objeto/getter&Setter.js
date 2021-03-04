const sequencia = {

    _valor: 1, //convenção JS no qual eu declarando o atributo dessa maneira dá-se a entender que ela será privada, ou seja, só será acessível dentro desse objeto.
    
    get valor() { return this._valor++ }, //_valor++ retorno sempre o proximo que é a ideia desse objeto
    
    set valor(valor) {
        //Nessa condição eu só altero o valor se ele for maior do que o que já existe se for menor nao altero o variavel.
        if (valor > this._valor) {
            this._valor = valor
        }
    }

}

console.log(sequencia.valor, sequencia.valor) //Uma forma de chamar o get e o set

sequencia.valor = 1000

console.log(sequencia.valor, sequencia.valor) //Mesma forma de chamar porém irá retornar 1000 e 1001 já que antes eu add o valor 1000 a variavel.
