function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r); // Retorna somente duas casas decimais
}

// Gera um numero aleatorio entre 1 e 50
//let rand = random(1, 50);

const min = 1;
const max = 50;
let rand = random(min, max);

// Enquanto rand for diferente de 10 executa o laço, se for igua a 10 sai fora do laço
while (rand !== 10) { 
    rand = random(min, max);
    console.log(rand);
}