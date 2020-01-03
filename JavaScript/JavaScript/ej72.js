/**
 * Ejercicio 72
Crear un documento con el nombre ej72.js
Mostrar en consola el siguiente dibujo utilizando la estructura while
*
**
***
****
*****
******
*******
********
*********
**********
***********
************
*************
 */


let cadena = "*", piramide = "", contador = 0, base = 13;

//con while
while(contador < base ){
    piramide += cadena;
    console.log(piramide+ "\n");
    contador++;
}