/**
 * Ejercicio 69
Crear un documento con el nombre ej69.js
Mostrar en consola la suma parcial de todos los números que van
desde 0 hasta 1000 utilizando la estructura while.
 */


let i = 1000, suma;

const sumar = (n) =>{
    return (n* (n+1) /2);
}

suma = sumar(i);
console.log(`El resultado es:  ${suma}`);
