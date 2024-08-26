const verdadeira = true;

// Let tem escopo de bloco { ... bloco}
// Var só tem escopo de função

let nome = 'Luiz'; // criando
var nome2 = 'Luiz';

if (verdadeira) {
    let nome = 'Otavio'; //
    // console.log(nome, nome2);

    if (verdadeira) {
        let nome = 'Outra coisa';// redefinindo 
        let nome2 = 'Theo';// redefinindo 
        console.log(nome, nome2);
    }
}