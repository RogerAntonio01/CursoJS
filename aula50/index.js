/*  funçao definida com a palavra function tem uma 
 variavel especial que se chama arguments, que 
 sustenta todos os argumentos enviados */

/* Argumentos são os valores que enviamos para os parametros */
function funcao() { // Parametros
    let total = 0;
    for (let argumento of arguments) { // variavel especial arguments
        total += argumento;
    }
    console.log(total);
}
funcao(1, 2, 3, 4, 5, 6, 7); // Argumentos 

console.log('');
console.log('');

function funcao2(a, b, c, d, e, f) { // Parametros
    console.log(a, b, c, d, e, f);
}
funcao2(1, 2, 3); // Argumentos

console.log('');
console.log('');

function funcao3(a, b =2, c = 4) { // Parametros
    console.log(a + b + c);
}
funcao3(2, undefined, 20); // Argumentos

console.log('');
console.log('');

function funcao4({nome, sobrenome, idade}) { // Parametros
    console.log(nome, sobrenome, idade);
}
funcao4({nome: 'Luiz', sobrenome:'Otavio', idade: 20}); // Argumentos por meio de objeto 


console.log('');
console.log('');



// Função com operador de resto ... //lembrando que sempre tem que ser o ultimo parametro
function conta(operador, acumulador, ...numeros) { // Parametros
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}
conta('+', 1, 20, 30, 40, 50); // Argumentos por meio de objeto 