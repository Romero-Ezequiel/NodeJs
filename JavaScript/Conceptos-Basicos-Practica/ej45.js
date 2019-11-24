/**
 * Ejercicio 45
Crear un documento con el nombre ej45.js
Declarar la variable mensaje y establecer el siguiente valor: 'Juan Roman Riquelme es el mejor del mundo'
Declarar la variable jugador

Utilizar el método slice para obtener el nombre Juan Roman Riquelme del texto en la variable mensaje y 
asignarlo a la variable jugador
Mostrar en consola el siguiente mensaje utilizando interpolación de textos: ${jugador} 
es el mejor 10 de la historia!!
 */

let mensaje = 'Juan Roman Riquelme es el mejor del mundo', jugador;

jugador = mensaje.slice(0, 41);

console.log(`${jugador} es el mejor 10 de la historia!!`)