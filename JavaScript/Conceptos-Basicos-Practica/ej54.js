/**
 * Ejercicio 54
Crear un documento con el nombre ej54.js
Copiar el código del ej51.md
Modificar el código para que cumpla con el nuevo requisito
Si el nombre del usuario es igual a 'pepe2017' Y el password es igual a '12345' Entonces
Mostrar en consola el siguiente mensaje: El usuario está autenticado y puede ver el contenido del sitio
SI NO:
Mostrar en consola el siguiente mensaje: Error, no se pudo autenticar al usuario, puede intentarlo más tarde
 */


let usuario = 'pepe2017', password = '12345';

if(usuario == 'pepe2017'){
    console.log('El usuario está autenticado y puede ver el contenido del sitio');
}else{
    console.log('Error, no se pudo autenticar al usuario, puede intentarlo más tarde');
}