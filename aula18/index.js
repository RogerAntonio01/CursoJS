/*
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: '65'
}

const pessoa2 = {
    nome: 'Maria',
    sobrenome: 'Oliveira',
    idade: '35'
}

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
 */

/* function criaPessoa (nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    };
}
const pessoa1 = criaPessoa('Luiz', 'Miranda', 25);
const pessoa2 = criaPessoa('Maria', 'Jose', 35);
const pessoa3 = criaPessoa('Joao', 'Paulo', 62);
const pessoa4 = criaPessoa('Junior', 'Souza', 45);
const pessoa5 = criaPessoa('Jean', 'Otavio', 26);

console.log(pessoa1.nome, pessoa2.nome) */

const pessoa1 = {
    nome: 'Luiz', // Propriedade nome
    sobrenome: 'Miranda', // Propriedade sobrenome
    idade: 25, // Propriedade idade

    // Método para falar a idade atual
    fala() {
        console.log(`A minha idade atual é ${this.idade}.`);
    },
    
    // Método para incrementar a idade
    incrementaIdade() {
        this.idade++; // Incrementa a propriedade idade em 1
    }
};

// Chama o método fala para exibir a idade atual
pessoa1.fala(); // A minha idade atual é 25.

// Incrementa a idade e exibe a nova idade
pessoa1.incrementaIdade();
pessoa1.fala(); // A minha idade atual é 26.

// Incrementa a idade e exibe a nova idade
pessoa1.incrementaIdade();
pessoa1.fala(); // A minha idade atual é 27.

// Incrementa a idade e exibe a nova idade
pessoa1.incrementaIdade();
pessoa1.fala(); // A minha idade atual é 28.

// Incrementa a idade e exibe a nova idade
pessoa1.incrementaIdade();
pessoa1.fala(); // A minha idade atual é 29.
