// return
// Retorna um valor
// Termina a funçao

function soma(a, b) {
    return a + b;
}

function soma2(a, b) {
    console.log(a + b);
}

soma(5, 2);


function falaFrase(comeco) {
    function falaResto(resto){
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('mundo!');
console.log(resto);




function criaMultiplicador(multiplicador) {
    // Multiplicador
    return function(n) {
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quaduplica = criaMultiplicador(4);

console.log(duplica(3));
console.log(triplica(2));
console.log(quaduplica(2));
