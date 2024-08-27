// Escreva uma  função que recebe um numero e 
// retorne o seguinte: 
// Numero é divisivel por 3 = Fizz
// Numero é divisivel por 5 = Buzz
// Numero é divisivel por 3 e 5 = FizzBuzz
// Numero NÃO é divisivel por 3 e 5 = retorna o proprio numero
// Checar se o numero é realmente um numero = retorna o proprio numero
// Use a Função com numeros de 0 a 100

function numero(num) {
    if (typeof num !== 'number') {
        console.log('Por favor, insira um número válido.');
        return;
    }
    if (num % 3 === 0 && num % 5 === 0) {
        console.log('FizzBuzz');
    } else if (num % 3 === 0) {
        console.log('Fizz');
    } else if (num % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(num);
    }
}

// Exemplo de uso
numero(15); // FizzBuzz
numero(9);  // Fizz
numero(10); // Buzz
numero(7);  // 7
numero('errr'); // Por favor, insira um número válido.


/* --- Outro modo --- */
console.log('###############################')


function fizzBuzz(numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero;
}

console.log('a', fizzBuzz('numero invalido'))
for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i))
}