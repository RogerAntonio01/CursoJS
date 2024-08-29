/* 
const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toString();

function getDiaSemanaTexto(diaSemana) {
    const diasSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'];
    return diasSemana[diaSemana];

}  

function getNomeMes(NumeroMes){
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return meses[NumeroMes];
}

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}

function criaData(data) {
    const diaSemana = data.getDay();
    const NumeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(NumeroMes);

    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes}` +
        ` de ${data.getFullYear()} ` +
        `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
    );
}

h1. innerHTML = criaData(data);

*/

const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'medium'});


/* --- Tempo com atualizaçao de hora --- */
const tempo2 = document.querySelector('.container2 h1');
const tempo3 = document.querySelector('.container3 h1');
const tempo4 = document.querySelector('.container4 h1');

function updateTime() {
    const data = new Date();
    tempo2.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'medium'});
    tempo3.innerHTML = data.toLocaleString();
    tempo4.innerHTML = data.toLocaleString('pt-BR', {timeStyle: 'medium'});
    tempo4.style.textAlign = 'center'; 
    tempo4.style.fontSize = '100px'; 
}

// Atualiza o tempo a cada segundo (1000 milissegundos)
setInterval(updateTime, 1000);

// Chama a função uma vez para exibir o tempo imediatamente
updateTime();
