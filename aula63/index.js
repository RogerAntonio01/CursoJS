//               -5       -4       -3        -2        -1
//                0        1        2         3         4
const nomes = ['Roger', 'Andre', 'Izabel', 'Vitor' , 'Anny'];

// nomes.splice(indice, delete, elem1, elem2, elem3);
// pop
// const removidos = nomes.splice(-1, 1); 

// shift
// const removidos = nomes.splica(0, 1);

// Push simulando push, adiciona no final 
// nomes.splice(nomes.length, 0, 'Luiz', 'Otavio');

// Unshift simulando unshift, adiciona no começo 
nomes.splice(0, 0, 'Luiz', 'Otavio');



console.log(nomes, removidos)