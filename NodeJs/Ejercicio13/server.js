const express = require('express');
const port = 3000;
const app = express();

app.use(express.json());

//Peticiones GET y POST a la ruta inicial de la app
app.get('/', (req, res)=>{
    res.send('Pagina: home, método: GET');
});

app.post('/:id', (req, res)=>{
    //Para mostrar la informacion que el cliente esta mandando al backend
    //el json que le envio por el postman
    console.log(req.body);
    //Para mostrar el id que le envio por postman y verlo en la consola
    //req.params es un objeto
    console.log(req.params);
    res.send('Pagina: home, método: POST');
});

//Peticiones GET, POST, PUT, DELETE a la ruta productos
app.get('/productos', (req, res)=>{
    res.send('Pagina: productos, método: GET');
});

app.post('/productos', (req, res)=>{
    res.send('Pagina: productos, método: POST');
});

app.put('/productos/:id', (req, res)=>{
    console.log(req.body);
    //res.send('Pagina: productos, método: PUT');
    res.send(`Producto ${req.params.id} fue actualizado`);
});

app.delete('/productos/:id', (req, res)=>{
    res.send(`Producto ${req.params.id} fue eliminado`);
});

app.listen(port, ()=>{
    console.log(`El servidor esta corriendo en http://localhost:${port}`);
});