const express = require('express');
const app = express();
const port = 5000;


app.listen(port, ()=>{
    console.log(`El servidor esta corriendo en http://localhost:${port}`);
});
