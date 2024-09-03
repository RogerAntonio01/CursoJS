
// Valor por referencia
//                 0          1       2
const nomes = ['Eduardo', 'Maria', 'Joana'];
//const nomes = new Array('Eduardo', 'Maria', 'Joana');
nomes[2] = 'Joao'; // altera o nome de joana para joao
delete nomes[2]; // deleta o nome que esta no indice 2, deixando o espaço vazio 
console.log(nomes);


const nomes2 = ['Roger', 'Andre', 'Izabel'];
let removido = nomes2.pop(); // exclui o ultimo item do array sem deixar espaço vazios
nomes2.shift(); // exclui o item do começo do array alterando os indices
console.log(nomes2, removido);



const nomes3 = ['Roger', 'Andre', 'Izabel'];
nomes3.unshift('Joao'); // adiciona um item no começo do array
nomes3.unshift('Wallace'); // adiciona um item no começo do array
console.log(nomes3);



const nomes4 = ['Roger', 'Andre', 'Izabel', 'Vitor' , 'Anny'];
const novo = nomes4.slice(1, -2); // exclui o primero e os dois ultimos itens do array
console.log(novo);



const nome = 'Roger Izabel Vitor Anny';
const nomes5 = nome.split(' '); // Converte uma string em um array separando por ' ' espaço
console.log(nomes5);


const nomes6 = ['Roger', 'Andre', 'Izabel'];
const nome2 = nomes6.join(' '); // Converte um array em uma string separando por ' ' espaço
console.log(nome2);