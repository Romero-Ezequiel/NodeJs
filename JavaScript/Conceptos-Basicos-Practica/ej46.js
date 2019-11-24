/**
 * Ejercicio 46
Crear un documento con el nombre ej46.js
Declarar la variable usuarioYPassword y asignarle el siguiente texto: 'pepito2017,12345'
Declarar la variable nombreDeUsuario y utilizar el método substr para obtener el nombre de usuario (pepito2017)
Declarar la variable password y utilizar el método substr para obtener el password (12345)
Mostrar en consola el siguiente mensaje: El usuario ${nombreDeUsuario} tiene ${password} como password
 */

let usuarioYPassword = 'pepito2017,12345', nombreDeUsuario, password;

nombreDeUsuario = usuarioYPassword.substring(0,10);

password = usuarioYPassword.substr(11, 16);

console.log(`El usuario ${nombreDeUsuario} tiene ${password} como password`);
