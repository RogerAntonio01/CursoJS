// 
const nome = ['Luiz', 'Otavio', 'Henrique'];

// For classico - Geralmente com iteráveis (array ou string)
// For in - Retorna o indice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)

// for (let i = 0; i < nome.lenght; i++) {
//     console.log(nome[i]);
// }

// for (let i in nome) {
//     console.log(nome[i]);
// }

for (let valor of nome) {
    console.log(valor);
}