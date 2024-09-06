const produto = { nome:'caneca', preco:1.8};
const outraCoisa = Object.assign({}, produto, {material: 'porcelana'})
/* const outraCoisa = {
    ...produto,
    material: 'porcelana'
};
 */
outraCoisa.nome = 'Outro nome';
outraCoisa.preco = 2.5;
console.log(produto);
console.log(outraCoisa);

// Mostra as configurações dos produtos
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

console.log(Object.keys(produto));

console.log(Object.values(produto));