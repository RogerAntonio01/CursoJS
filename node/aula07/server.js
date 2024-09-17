const express = require('express');
const { type } = require('os');
const app = express();

//         Criar   let   atualizar  apagar
// CRUD -> CREATE, READ, UPDATE,   DELETE
//         POST    GET   PUT       DELETE

app.get('/', (req, res) => {
    res.send('<form action= "/" method="POST"> Nome do cliente: <input type="text" name =""><button>Enviar</button></form>'); 
});



app.post('/', (req, res) => {
    res.send('Recebi o formulario');
});

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente.');
});

app.listen(3001, () => {
    console.log('Acessar http://localhost:3001');
    console.log('Servidor executando na porta 3001');

})