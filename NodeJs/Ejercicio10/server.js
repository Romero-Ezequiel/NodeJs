const express = require('express');
const port = 5000;
const app = express();

//Ruta: Raiz del sitio ,Metodo: get, Acción: Mostrar un mensaje de bienvenida
app.get('/', (req, res)=>{
    res.send('Bienvenida raiz del sitio');
});

//Ruta: Productos, Metodo: get, Acción: Mostrar un mensaje que diga: listado de
//productos
app.get('/Productos', (req, res)=>{
    res.send('listado de productos');
});

//Ruta: Productos, Metodo: post, Acción: Mostrar un mensaje que diga: crear 
//un producto
app.post('/Productos', (req, res)=>{
    res.send('crear un producto');
});

//Ruta: Productos, Metodo: put, Acción: Mostrar un mensaje que diga: actualizar
//un producto
app.put('/Productos', (req, res)=>{
    res.send('actualizar un producto');
});

//Ruta: Productos, Metodo: delete, Acción: Mostrar un mensaje que diga: borrar 
//un producto
app.delete('/Productos', (req, res)=>{
    res.send('borrar un producto');
});

//Ruta:
//Usuarios, Metodo: get, Acción: Mostrar un mensaje que diga: listado de usuarios
app.get('/Usuarios', (req, res)=>{
    res.send('Listado de usuarios');
});

//Ruta: 
//Usuarios, Metodo: post, Acción: Mostrar un mensaje que diga: crear un usuario
app.post('/Usuarios', (req, res)=>{
    res.send('Crear un usuario');
});

//Ruta: Usuarios, Metodo: put, Acción: Mostrar un mensaje que diga: actualizar 
//un usuario
app.put('/Usuarios' ,(req, res)=>{
    res.send('Actualizar un usuario');
});

//Ruta: Usuarios, Metodo: delete, Acción: Mostrar un mensaje que diga: borrar 
//un usuario
app.delete('/Usuarios', (req, res)=>{
    res.send('Borrar un usuario');
});

app.listen(port, ()=>{
    console.log(`El servidor esta corriendo en el puerto http://localhost:${port}`);
})