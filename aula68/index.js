// Retorne a soma do dobro de todos os pares 
// -> filtrar pares 
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosPares = numeros.filter(valor => valor % 2 === 0); // o resto da divisão entre os numeros e 2 tem que dar 0
console.log(numerosPares);

// -> Dobrar os valores
const numerosDobro = numerosPares.map(valor => valor * 2);
console.log(numerosDobro);

// -> Reduzir (somar tudo)
const numerosSomaTudo = numerosDobro.reduce((ac, valor) => ac + valor);
console.log(numerosSomaTudo);




//Forma reduzida 
/* const numerosPares = numeros.filter(valor => valor % 2 === 0).map(valor => valor * 2).reduce((ac, valor) => ac + valor);
console.log(numerosSomaTudo); */