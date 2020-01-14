const express = require('express');
const port = 3000;
const app = express();

app.use('/static', express.static(__dirname +'/public'));

app.get('/', (req, res)=>{
    res.sendFile(__dirname +'/public/index.html');
});

app.get('/products', (req, res)=>{
    res.sendFile(__dirname +'/public/productos.html');
});

app.listen(port, ()=>{
    console.log(`El servidor corriendo en http://localhost:${port}`);
});