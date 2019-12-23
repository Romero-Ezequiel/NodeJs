/**
Solicita un nombre, la edad y muestra por consola el mensaje 
"Hola____, tienes ____ años y el año que viene tendrás ____ años. 
Realiza el ejercicio con prompt (mensaje) y haz  uso de los template strings" 
*/

let nombre, edad;

nombre = prompt('Ingrese un nombre: ');
edad = prompt('Ingrese su edad: ');

console.log(`"Hola ${nombre}, tienes ${edad} años y el año que viene tendrás ${(parseInt(edad)+1)} años."`);