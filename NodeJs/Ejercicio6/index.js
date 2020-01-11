module.exports = function saludar(nombre, apellido, saludo = ()=>{
    console.log('Luego de saludar se ejecuta el callback');
}) {
    console.log(`Hola ${nombre} ${apellido}`);
    saludo();
}

let mostrar = require('./index.js');
mostrar('Ezequiel', 'Romero');

//Utilizar npm start para ejecutar el ejercicio en la consola