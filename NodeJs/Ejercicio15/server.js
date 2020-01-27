const express = require('express');
const port = 3030;
const app = express();

//Crear la siguiente ruta, url: '/', metodo: get
app.get('/', (req, res)=>{
   res.json({
    status: 200,
    message: 'Este request/response está OK'
  }) 
});
//Crear el siguiente middleware
var requestTime = function (req, res, next) {
    const mensaje = `Request a ${req.baseUrl} ${Date.now()}`
    console.log(mensaje)
    next();
};
//Configurar el middleware
app.use(requestTime);

app.listen(port, ()=>{
    console.log(`El servidor esta corriendo en http://localhost:${port}`);
});