// Escreva uma função chamada ePaisagem que 
// recebe dois argumentos, largura e altura 
// de uma imagem (number). 
// retorne true se a  imagem estiver no modo
// paisagem.

function ePaisagem(altura, largura) {
    if (altura < largura) {
        console.log('true');
    } else {
    console.log('false');
    }
}

paisagem = ePaisagem(500, 300);


/* ---Outro modo simplificado--- */

/* function ePaisag(largura, altura) {
    return largura > altura;
    //return largura > altura ? true : false;
}
console.log(ePaisag(15086, 2000));
 */

const ePaisag = (largura, altura) => largura > altura;
   
console.log(ePaisag(15086, 2000));