/**
 * Ejercicio 129
Crear un documento con el nombre ej129.js
Copiar y pegar el código del ejercicio 125
Recorrer la lista de gustos de helados y mostrarlos en consola uno a 
uno utilizando console.log()
De inicio a fin
De fin a inicio
 */

let helados = ['crema del cielo', 'granizado', 'chocolate', 'dulce de leche', 
'frutillas','banana split', 'almendrado','amarena','crema con frutillas',
'chocolate nevado'];

console.log("********** De inicio a fin **********");
for(let i=0; i < helados.length; i++){
    console.log(helados[i]);
}

console.log("********** De fin a inicio **********");
for(let i=helados.length-1; i > 0; i--){
    console.log(helados[i]);
}
