/* 
Primitivos (imutaveis) - string, number, boolean, undefined, null (bigint, symbol) - valor copiados

Referência (mutavel) - array, object, function - Valores passados por referencia
*/

let a = [1, 2, 3];
let b = a;
let c = b;
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push('Luiz');
console.log(c);