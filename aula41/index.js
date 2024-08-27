// escreva uma Função que recebe 2 numeros e retorne o maior deles 

function max(x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }    
}

console.log(max(10,23));

/* -------O mesmo codigo de uma forma reduzida-------- */

const max2 = (x, y) => x > y ? x : y;
console.log(max2(18,35));