//  ... rest, ... spread
//                   0          1          2
//                0  1  2    0  1  2    0  1  2
const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

/* console.log(numeros[1][2]); // mostra o numero 6 */

const [lista1, lista2, lista3] = numeros;
console.log(lista3[2])