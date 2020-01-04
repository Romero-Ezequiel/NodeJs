/**
 * Ejercicio 82
Crear un documento con el nombre ej82.js
Copiar y pegar el código del ejercicio ej72.js
Refactorizar el código utilizando la estructura do/while en lugar de while
 */

let cadena = "*", piramide = "", contador = 0, base = 13;

//con do while
do{
    piramide += cadena;
    console.log(piramide+ "\n");
    contador++;
}
while(contador < base )