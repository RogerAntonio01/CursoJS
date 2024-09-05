// Factory functions / Constructor functions / Classes
function criaPessoa(nome, sobrenome) {
    return {
        nome, 
        sobrenome,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otavio');
console.log(p1.nomeCompleto());




function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

// {} <- this
const p2 = new Pessoa('Luiz', 'Miranda');
p2.nome = 'outra coisa';
console.log(p2);

const p3 = new Pessoa('Roger', 'Antonio');
console.log(p3);
