/**
 * Ejercicio 48
Crear un documento con el nombre ej48.js

Declarar la variable mensaje y asignar el siguiente valor: 
'3.14 es un gran número, pero mejor es 42 que le da significado a la vida'

Declarar la variable pi y obtener el valor 3.14 de la variable mensaje y transformarlo como número decimal
Declarar la variable significadoDeLaVida y obtener el valor 42 de la variable mensaje y 
transformarlo como número entero

Declarar la variable resultado y asignar el resultado de la suma de las variables pi y significadoDeLaVida
Mostrar en consola el contenido de la variable resultado

Mostrar en consola el mensaje: 45.14 es el resultado de sumar las variables pi y 
significadoDeLaVida, concatenando los valores. Utilizar el método toString para 
convertir los numbers a strings.
*/

let mensaje = '3.14 es un gran número, pero mejor es 42 que le da significado a la vida',pi, pi1;

pi = parseFloat(mensaje.substr(0, 4)) + parseFloat(mensaje.substr(38, 2));

console.log(pi);
