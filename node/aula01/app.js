/* const mod1 = require('./mod1');
// const { nome, sobrenomem, falanome} = require('./mod1');
//console.log(nome, sobrenome);
//console.log(falaNome());
console.log(mod1) */

const path = require('path');
const axios = require('axios');
const { Pessoa } = require('./mod1');

axios('https://www.otaviomiranda.com.br/files/json/pessoas.jason')
    .then(response => console.log(response.data))
    .catch(e => console.log(e));
