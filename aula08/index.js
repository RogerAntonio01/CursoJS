const nome = "Luis Otavio";
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.80;
let imc; // peso / (altura * altura)
let anoNascimento;

imc = peso / (altura * altura)
console.log(imc)
anoNascimento = 2024 - idade;
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg.`)
console.log(`tem ${altura} de altura e seu IMC é de ${imc}.`)
console.log(`${nome} nasceu em ${anoNascimento}.`)