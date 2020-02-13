/**
 * Ejercicio: Crear un servidor sin utilizar express.
 * Para realizar este ejercicio tengo que utilizar un modulo de NodeJs que 
 * viene por defecto, este modulo es http me va a permitir realizar un servidor
 * sin la utilización de express. 
 */
//Lo primero que tengo que realizar es importar el modulo http
const http = require('http');
//Luego declaro una variable para asignarle el puerto de escucha del servidor
const port = 5000;
/**
 * Luego utilizo el modulo http para crear el servidor. Realizo 
 * http.createServer() invoco la funcion createServer() que necesita pasarle
 * por parametro una peticion y una respuesta. Luego guardo todo en una
 * variable llamada server, la cual va ser mi servidor
 */
const server = http.createServer((Request, Response)=>{
    //Aca realizo un filtrado de url, para que la respuesta no se muestre
    //en todas las url, sino en la que indique. 
    if(Request.url === '/'){
        /**
         * Le indico con un response.writeHead(), el codigo de respuesta
         * y luego le indico como respuesta le voy a enviar un codigo html.
         * */
        Response.writeHead(200, {"Content-Type": "text/html"});
        //Luego utilizo un respose.write() para escribir la respuesta al cliente
        Response.write('<html><body><h1>Pagina de Inicio</h1></body></html>');
        //Por ultimo le envio la respuesta al cliente
        Response.end();
    }else if(Request.url === '/contactos'){
        Response.writeHead(200, {'Content-Type': 'text/html'});
        Response.write('<html><body><h1>Pagina de Contactos</h1></body></html>');
        Response.end();
    }else{
        //En caso, de realizar una peticion a una url que no exista
        Response.writeHead(404, {'Content-Type': 'text/html'});
        Response.write('<html><body><h1>Error 404</h1></body></html>');
        Response.end();
    }
});

server.listen(5000);
console.log('El servidor está corriendo en el puerto 5000');