/**
Ejercicio 17

Crear un documento con el nombre ej17.js
Crear una variable serie con el valor: Game of Thrones
Crear una variable dragon1 con el valor Drogon
Crear una variable dragon2 con el valor Rhaegal
Crear una variable dragon3 con el valor Viserion

Crear una variable template con el siguiente valor:
Los 3 dragones de serie se llaman: dragon1, dragon2 y dragon3

Mostrar en consola el siguiente mensaje: 

Los 3 dragones de Game of Thrones se llaman: 
Drogon, Rhaegal y Viserion, utilizando interpolación de textos

*/

let serie = 'Game of Thrones', 
    dragon1 = 'Drogon', 
    dragon2 = 'Rhaegal',
    dragon3 = 'Viserion',
    template = `Los 3 dragones de serie se llaman: ${dragon1},
                ${dragon2} y ${dragon3}`;

console.log(`${template} utilizando interpolación de textos`);

