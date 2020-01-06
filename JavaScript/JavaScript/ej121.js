/**
 * Ejercicio 121
Crear un documento con el nombre ej121.js
Declarar un array con el nombre juegos y asignar los siguientes valores:

Grand Theft Auto V, The Last of Us Remastered, Persona 5, Metal Gear Solid V
Uncharted 4, Journey, Bloodborne, The Witcher 3, INSIDE, flower, Diablo III

Reemplazar Grand Theft Auto V por FIFA 18
Reemplazar Metal Gear Solid V por FIFA 17
Reemplazar flower por FIFA 16
Mostrar en consola la lista de juegos modificada
 */

let juegos = ['Grand Theft Auto V','The Last of Us Remastered',
'Persona 5','Metal Gear Solid V','Uncharted 4','Journey','Bloodborne',
'The Witcher 3','INSIDE','flower','Diablo III'];

juegos[0] = 'FIFA 18';
juegos[3] = 'FIFA 17';
juegos[9] = 'FIFA 16';

console.log('Lista de juegos modificada'+ juegos);