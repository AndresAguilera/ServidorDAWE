'use strict';

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 8000;

mongoose.connect('mongodb://localhost:27017/dawe', {useMongoClient: true})
    .then(() => {
        console.log('La conexion a la base de datos se a realizado Correctamente');
        app.listen(port, () =>{
            console.log('El servidor esta corriendo en el puerto: 8000');
        });
    })
    .catch(err => console.log(err));