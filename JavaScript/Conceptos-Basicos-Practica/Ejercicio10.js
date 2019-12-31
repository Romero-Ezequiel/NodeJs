/**
 * Dado un array que contiene ["Azul","Amarillo","Rojo","Verde","Rosa"]. 
 * Determinar si un color introducido por el usuario a través de un prompt 
 * se encuentra dentro del array o no.
 */


let arreglo = ["azul","amarillo","rojo","verde","rosa"];

let color;

color = prompt('Introducir un color: ');

for(var i=0; i < arreglo.length ;i++){

    if(color == arreglo[i]){
        console.log('El color ingresado por el usuario se encuentra en el arreglo');
    }

}