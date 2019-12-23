/**
* Ejercicio 26
Crear un documento con el nombre ej26.js
Definir el concepto de curso utilizando diferentes variables y
tipos de datos (Ejemplo: nombre, nro de aula, cantidad de alumnos, etc)
Encontrar al menos 6 variables que ayuden a describir el concepto de curso

Mostrar el valor de las variables de la siguiente forma: 
console.log(nombreDeLaVariable, valor)

Mostrar el tipo de dato de las variables de la siguiente forma: 
console.log(nombreDeLaVariable, typeof nombreDeLaVariable)
*/

//let nombre, nroAula, cantidadAlumnos;
const nombre = 'Ezequiel';
const edad = 25;
const casado = false;
const indefinido = undefined;
const nulo = null;
const nan = "lalala";

console.log(typeof nombre); // string
console.log(typeof edad); // number
console.log(typeof casado); // boolean
console.log(typeof indefinido); // undefined
console.log(typeof nulo); // object
console.log(Number(nan)); // NaN