class Pessoa {
    constructor(nome,sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto() {
        return this.nome + '' + this.sobrenome;
    }

    set nomeCompleto(valor) {
        valor = valor.split(' '); // Divide uma string em um array de substrings, usando um separador especificado.
        this.nome = valor.shift(); // Remove e retorna o primeiro elemento de um array.
        this.sobrenome = valor.join(' '); // Junta todos os elementos de um array em uma única string, usando um separador especificado.
    }
}

const p1 = new Pessoa('Luiz', 'Miranda');
p1.nomeCompleto = 'Luiz Miranda Oliveira'
console.log(p1.nome);
console.log(p1.sobrenome);