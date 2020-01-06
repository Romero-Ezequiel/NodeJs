/**
 * Ejercicio 118
Crear un documento con el nombre ej118.js
Crear un array con el nombre notas y asignar 10 valores numéricos de 1 a 10
Sumar los valores del primer, cuarta, quinta y última entrega
Cada nota del array notas corresponde a una entrega de los alumnos
 */

let notas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    primero, cuarto, quinto, ultimo, suma;

primero = notas[0]; 
cuarto = notas[4];
quinto = notas[5];
ultimo = notas[9];

suma = primero + cuarto + quinto + ultimo;

console.log('La suma es: '+ suma);