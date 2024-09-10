function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') { 
                reject('CAI NO ERRO');
                return;
            }   
            resolve(msg.toUpperCase() + '- Passei na promise');
        }, tempo);
    });
}
/* 
esperaAi('Fase 1', rand())
    .then(valor => {
        console.log(valor);
        return esperaAi('Fase 2', rand());
    })
    .then(valor => {
        console.log(fase);
        return esperaAi('Fase 3', rand());
    })
    
    .then(valor => {
        console.log(fase);
    })
    .catch(e => console.log(e));
     */

async function executa() {
    try {
        const fase1 = await esperaAi('Fase 1', rand());
        console.log(fase1);
        const fase2 = await esperaAi('Fase 2', rand());
        console.log(fase2);
        const fase3 = await esperaAi('3', rand());
        console.log(fase3);
        const fase4 = await esperaAi('Fase 4', rand());
        console.log(fase4);

        console.log('Terminamos na fase:', fase4)
    }catch(e) {
        console.log(e);
    }
}
executa();