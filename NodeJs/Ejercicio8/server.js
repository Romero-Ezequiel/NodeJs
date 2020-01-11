const http = require('http');
const puerto = 3001;
const server = http.createServer();

server.listen(puerto, (error) => {
    if (error) return console.log(`Error: ${error}`);
    console.log(`Servidor corriendo en el puerto ${puerto}`)
})