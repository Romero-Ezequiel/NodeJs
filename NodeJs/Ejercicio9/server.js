const express = require('express');
const port = 5000;
const app = express();

app.listen(port, (error)=>{
    if (error) return console.log(`Error: ${error}`);
    console.log(`Servidor corriendo en el puerto ${port}`);
});
