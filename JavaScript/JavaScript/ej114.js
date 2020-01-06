/**
 * Ejercicio 114
Crear un documento con el nombre ej114.js
Crear una función con el nombre invertir que acepta un texto como parámetro
Mostrar en consola el texto invertido
Casos de uso:
Si se ejecuta la función con el valor hola se espera que la función retorne aloh
 */

const invertir = (cadena) => {

    var x = cadena.length;
    var cadenaInvertida = "";

    while (x >= 0) {
        cadenaInvertida = cadenaInvertida + cadena.charAt(x);
        x--;
    }
    return cadenaInvertida;
}

console.log(invertir('Hola'));