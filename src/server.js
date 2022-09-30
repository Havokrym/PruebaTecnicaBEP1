//librerias necesesarias

const express=require('express');
const { json } = require('express/lib/response');

//confi server
const app=express();
app.set('port', process.env.PORT|| 3000);
app.set(express.urlencoded({extended: false }));
app.set(express.json());
//confi middles
app.use(express.urlencoded({extended: false }));
app.use(express.json());

//add rutas
app.use(require('./routes/index.routes.js'));

//error 404
app.use((require, response, next) => {
    return response.status(404).send('<h1>404</h1><h3>Pagina no encontrada</h3>');
});

//erro 500

app.use((require, response, next) => {
    return response.status(500).send(`<h1>Error 500</h1><h3>${errr}</h3>`);
});

module.exports = app;