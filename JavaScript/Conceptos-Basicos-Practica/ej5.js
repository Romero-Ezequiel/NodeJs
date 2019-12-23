/**
 * Ejercicio 5
Crear un documento con el nombre ej5.js
Declarar las siguientes variables de forma individual y asignarle a cada una un 
valor para describirte:

- nombre
- apellido
- edad
- fecha de nacimiento
- direccion

Mostrar en consola el valor de cada una de las variables utilizando console.log()
*/

var nombre = 'Ezequiel';
var apellido = 'Romero';
var edad = 25;
var fechaNac = '25/02/1994'; 
var direccion = 'Calle false 1234';

//Utilizando template string
console.log(`El nombre es :${nombre}, ${apellido} tiene ${edad} años, nació el ${fechaNac} y vive en ${direccion}`);