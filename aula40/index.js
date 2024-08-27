const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let numero of numeros) {

    if (numero === 2) {
        console.log('Pulei o numero 2');
        continue; // pula o numero e continua a repetiçao
    }

    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado, saindo...')
        break; // paarar a repetiçao
    }
}