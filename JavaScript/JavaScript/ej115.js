/**
 * Ejercicio 115
Crear un documento con el nombre ej115.js
Crear una función con el nombre elMasGrande que acepte un nombre como parámetro
Si el parámetro es Roman entonces:
Mostrar el siguiente mensaje en mayúscula: El mejor de la historia es Román
Sino
Mostrar el siguiente mensaje en minuscula: Por favor ingrese el nombre de 
un gran jugador
 */

const elMasGrande = (nombre) =>{

    if(nombre.toUpperCase() == 'ROMAN'){
        console.log('El mejor jugador de la historia');
    }
    else{
        console.log('Por favor ingrese el nombre de un gran jugador');
    }
}

elMasGrande('Palermo');