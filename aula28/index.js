// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras - umDia); // 01/01/1970 // Timestamp unix ou época unix 
// const data = new Date(2019,3, 20, 15, 14, 27, 1000); // a, m, d, M, s, ms

const data = new Date('2019-04-20 20:20:59');
console .log('Dia', data.getDate());
console .log('Mês', data.getMonth());
console .log('Ano', data.getFullYear());
console .log('Hora', data.getHours());
console .log('Min', data.getMinutes());
console .log('Seg', data.getSeconds());
console .log('Ms', data.getMilliseconds());
console .log('Dia semana', data.getDay()); // 0 - Domingo, 6 - Sabado

console.log(data.toString());