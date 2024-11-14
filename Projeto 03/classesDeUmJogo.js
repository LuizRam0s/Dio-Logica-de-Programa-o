class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case "guerreiro":
                ataque = "espada"
                break;
            case "mago":
                ataque = "magia"
                break;
            case "monge":
                ataque = "artes marciais"
                break;
            case "ninja":
                ataque = "shuriken"
                break;   

            default:
                ataque = "sem ataque"
        }

        return `O ${this.tipo} ${this.nome} atacou usando ${ataque}`
    }
}

let heroi01 = new Heroi("Luiz", 26, "mago")
console.log(heroi01.atacar())

let heroi02 = new Heroi("Amestel", 2, "guerreiro")
console.log(heroi02.atacar())