// construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomeCompleto = () => this.nome + '' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
}

// instancia
const pessoa1 = new Pessoa('Luis', 'O.'); // <- Pessoa = Função construtora
const pessoa2 = new Pessoa('Maria', 'A.');// <- Pessoa = Função construtora

const data = new Date(); // <-- Date = Função construtora

console.dir(pessoa1);
console.dir(pessoa2);
console.dir(data);
