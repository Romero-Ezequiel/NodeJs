/**
 * Ejercicio 15
Crear un archivo con el nombre ej15.js
Levantar un servidor de Express
Crear la siguiente ruta, url: '/', metodo: get
Esta ruta tiene que retornar el siguiente objeto en formato JSON:
{
  status: 200,
  message: 'Este request/response está OK'
}
Crear el siguiente middleware
var requestTime = function (req, res, next) {
  const mensaje = `Request a ${req.baseUrl} ${Date.now()}`
  console.log(mensaje)
  next();
};
Configurar el middleware
app.use(requestTime)
Si todo esta bien en la consola del server donde levantaste express deberías 
ver un mensaje similar al siguiente:
Request realizado 1506002876731
 */