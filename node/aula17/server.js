require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONECTIONSTRING)
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Erro ao conectar ao MongoDB', err));

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const routes = require('./routes');
const path = require('path');
const helmet = require('helmet');
const csrf = require('csurf');

const { middlewareGlobal, outroMiddleware, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');

app.use(helmet());

app.use(express.urlencoded({ extended: true }));

app.use('/public', express.static(path.join(__dirname, 'public')));

const sessionOptions = session({
  secret: 'adfgkdfgkdkf sfgsklgksf rgekgkc sfskl rlw()',
  store: MongoStore.create({ mongoUrl: process.env.CONECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, // 1 semana
    httpOnly: true
  }
});

app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(csrf());
// nossos próprios middlewares
app.use(middlewareGlobal);
app.use(outroMiddleware);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor executando na porta 3000');
});
