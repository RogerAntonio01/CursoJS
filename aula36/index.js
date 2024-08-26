// For in -> Lê os indices[] ou chaves{} do objeto
//                 0       1      2
//const frutas = ['pera', 'maçã', 'uva'];

const pessoa = {
    nome: 'luiz', 
    sobrenome: 'otávio',
    idade: 30
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}


/* 
for (let indice in frutas) {
    console.log(frutas[indice]);
} 
*/

/*
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
} 
*/
