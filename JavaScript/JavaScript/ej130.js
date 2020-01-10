/**
 * Ejercicio 130
Crear un documento con el nombre ej130.js

Declarar la siguiente lista de mutantes:

Prof. Charles Francis Xavier, Scott Summers, Dr. Henry Philip "Hank" McCoy,
Jean Elaine Grey, Calvin Montgomery Rankin, Kevin Sydney, Lorna Sally Dane,
Alexander Summers, Suzanne Chan, James "Logan" Howlett, Ororo Monroe,
Ordenar la lista

Revertir el orden de la lista ordenada. Unir los nombres de todos los
mutantes utilizando * para separarlos. Mostrar en consola:

Lista original de mutantes
Lista ordenada de mutantes
Lista revertida de mutantes
Nombres de mutantes sepadaros por *
 */

let mutantes = ['Prof. Charles Francis Xavier','Scott Summers',
'Dr. Henry Philip "Hank" McCoy','Jean Elaine Grey', 
'Calvin Montgomery Rankin','Kevin Sydney','Lorna Sally Dane',
'Alexander Summers','Suzanne Chan','James "Logan" Howlett','Ororo Monroe'].reverse();

let cadenaNueva = mutantes.join(' * ');

console.log(cadenaNueva);
