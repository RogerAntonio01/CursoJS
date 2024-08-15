let num1 = 10.45546354635;
let num2 = 2.5;

// console.log(num1.toString() + num2)  // converte a variavel somente por um momento

// num1 = num1.toString()  // converte a variavel pra sempre

// console.log (typeof num1)  // Tipo da variavel

//console.log(num1.toFixed(2))  // limita quantas casa decimais aparecerá

//console.log(Number.isInteger(num1)) // retorna verdadeiro ou falso se é um numero inteiro

//let temp = null * 'Ola';
//console.log(Number.isNaN(temp));// retorna verdadeiro se a conta for invalida

num1 = Number(num1.toFixed(2));
console.log(num1);
console.log(Number.isInteger(num1));