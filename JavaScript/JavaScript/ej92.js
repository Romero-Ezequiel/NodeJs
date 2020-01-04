/**
 * Ejercicio 92
Crear un documento con el nombre ej92.js
Copiar y pegar el código del ejercicio ej82.js
Refactorizar el código utilizando la estructura for en lugar de do/while
 */

let cadena = "*", piramide = "", contador = 0, base = 13;

for(contador; contador < base; contador++){
    piramide += cadena;
    console.log(piramide+ "\n");
}
