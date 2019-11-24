/**
 * Ejercicio 57
Crear un documento con el nombre ej57.js
Copiar el código del ej54.md
Refactorizar el código y utilizar operador ternario en lugar de if/else
 */
let usuario = 'pepe2017', password = '12345';
/*
if(usuario == 'pepe2017'){
    console.log('El usuario está autenticado y puede ver el contenido del sitio');
}else{
    console.log('Error, no se pudo autenticar al usuario, puede intentarlo más tarde');
}*/

//Condicionales TERNARIOS
(usuario == 'pepe2017') ? 
console.log('El usuario está autenticado y puede ver el contenido del sitio') 
:
console.log('Error, no se pudo autenticar al usuario, puede intentarlo más tarde');



