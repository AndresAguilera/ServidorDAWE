'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//cargar rutas
app.get('/get', (req, res) => {
    res.status(200).send({message: 'Funca'})});

app.post('/post', (req, res) => {
    res.append("nombre","andres");
    res.status(200).send({message: 'Funca post '+res.body})});

//middlewares de body parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Ruta Base


//rutas body-parser


module.exports = app;