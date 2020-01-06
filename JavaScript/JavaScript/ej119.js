/**
 * Ejercicio 119
Crear un documento con el nombre ej119.js
Crear el siguiente array con el nombre datos: [42, true, 
function() {return 'El significado de la vida es: '}]
Si el segundo item en el array datos es verdadero entonces
Mostrar en consola: El significado de la vida es: 42
Utilizar el primer y último item del array datos para formar el string 
del mensaje pedido
 */

let datos = [42, true, function() {return 'El significado de la vida es: '}];

if (datos[1] == true){

    console.log(datos[2] `` + datos[0])
}