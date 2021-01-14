//essa função ela irá repetir a idade icrementando de 1 em 1 por 1000 milisegundos
function Pessoa(){
    this.idade = 24

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 10000)
}

new Pessoa