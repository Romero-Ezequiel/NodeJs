/**
 * Ejercicio 111
Crear un documento con el nombre ej111.js
Crear una función esPar que retorna un valor boolean
Esta función debe validar si un número es par o no
Ejecutar esta función con los siguientes números: 2, 5, 3, 24, 12
En caso de que el número sea par mostrar un mensaje que diga: ${numero} es par
Caso contrario mostrar en consola el siguiente mensaje: ${numero} no es par
 */

const esPar = () =>{
    var num = [2, 5, 3, 24, 12];
    for(var i=0; i <= num.length-1; i++){
        if(num[i] % 2 == 0){
            console.log(`${num[i]} es par`);
        }else{
            console.log(`${num[i]} no es par`);
        }
    }
}

esPar();

