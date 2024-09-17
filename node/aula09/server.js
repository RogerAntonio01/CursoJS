const express = require('express');
const app = express();
const routes = require('./routes')

//         Criar   let   atualizar  apagar
// CRUD -> CREATE, READ, UPDATE,   DELETE
//         POST    GET   PUT       DELETE

app.get('/', (req, res) => {
    res.send('<form action= "/" method="POST"> Nome do cliente: <input type="text" name =""><button>Enviar</button></form>'); 
});

app.use(express.urlencoded({extended: true}));
app.use(routes);

app.listen(3001, () => {
    console.log('Acessar http://localhost:3001');
    console.log('Servidor executando na porta 3001');

})