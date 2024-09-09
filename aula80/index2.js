// classe
class Pesssoa {
    constructor(nome, sobrenome){
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando.`);
    }
    comer() {
        console.log(`${this.nome} está comendo.`);
    }
    beber() {
        console.log(`${this.nome} está bebendo.`);
    }
}

const p1 = new Pesssoa('Luiz', 'Miranda');
console.log(p1);
const p2 = new Pesssoa('Maria', 'Souza');
console.log(p2);
const p3 = new Pesssoa('Joana', 'inacia');
console.log(p3);
const p4 = new Pesssoa('Vitor', 'Farias');
console.log(p4);