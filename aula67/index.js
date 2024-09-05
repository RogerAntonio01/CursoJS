// Some todos os numeros (reduce)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valor) {
    if(valor % 2 !== 0) { // somando somente numeros impares
        acumulador += valor;
    } 

    return acumulador;
}, 0);
console.log(total);





// Retorne a pessoa mais velha
const pessoas = [
    { nome: 'Luiz', idade: 92},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Leticia', idade: 19},
    { nome: 'Rosane', idade: 32},
    { nome: 'Wallace', idade: 47},
];

const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);
