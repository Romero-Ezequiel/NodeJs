/**
 * Ejercicio 106
Crear un documento con el nombre ej106.js
Declarar la función obtenerIDUsuario que retorna un valor number con el número 50
Declarar la función usuarioValido que retorna un valor boolean
En esta función obtener el ID del usuario con la función obtenerIDUsuario
Si el ID del usuario es mayor que 30 retornar falso sino verdadero
SI el usuarioValido Entonces
Mostrar el mensaje: EL usuario es válido
SINO
Mostrar el mensaje: EL usuario no es válido
 */

const obtenerIDUsuario = () =>{
    return 50;
}

const usuarioValido = () =>{
    if(obtenerIDUsuario().valueOf() > 30){
        return false;
    }
    else{
        return true;
    }
}

switch(usuarioValido().valueOf()){
    case true: console.log('El usuario es valido');break;
    case false: console.log('El usuario no es valido');break;
}