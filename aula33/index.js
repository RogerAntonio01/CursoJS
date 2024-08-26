const pessoa = {
    nome: 'Luiz',
    sobrenome: 'miranda',
    idade: 30,
    endereco: {
        rua: 'AV Brasil',
        numero: 320
    }
};

// Atribuição via desestruturação 
const {nome, sobrenome, ...resto} = pessoa;
console.log(nome, sobrenome, resto);

//const {nome, sobrenome} = pessoa;
//console.log(nome,sobrenome);

