/**
 * Ejercicio 110
Crear un documento con el nombre ej110.js
Crear la función promedio que acepta 5 notas (numbers)
Mostrar en consola el promedio de la cursada
 */

const promedio = (nota1, nota2, nota3, nota4, nota5) =>{

    let prom;

    prom = (nota1 + nota2 + nota3 + nota4 + nota5)/5;

    return prom;
}

console.log(`El promedio de las 5 notas es: ${parseFloat(promedio(6, 7, 6, 6.50, 9))}`);