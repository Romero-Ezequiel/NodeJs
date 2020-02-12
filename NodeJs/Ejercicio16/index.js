//Requiero el modulo de express para realizar el servidor
const express = require('express');
const app = express();
//Creo una variable constante y le asigno el valor del puerto del servidor
const port = 5000;
//Aca configuro el middleware para servir los archivos estaticos al servidor
app.use(express.static(__dirname + '/public'));
//Le indico a mi servidor que escuche en un puerto y que ejecute un mensaje
//cuando es levantado
app.listen(port, ()=>{
    console.log('El servidor esta corriendo en el puerto ' + port)
});