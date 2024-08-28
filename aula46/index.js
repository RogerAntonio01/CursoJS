function mostrarHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

const timer = setInterval(function() {
    console.log(mostrarHora());
}, 1000); // 1000 milisegundos = 1 segundo

setTimeout(function() {
    clearInterval(timer);
}, 3000); // 3000 milisegundos = 3 segundo

setTimeout(function() {
    console.log('Olá Mundo!');
}, 5000); // 5000 milisegundos = 5 segundo

    