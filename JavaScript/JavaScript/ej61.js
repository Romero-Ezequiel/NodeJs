/**
 * Ejercicio 61
Crear un documento con el nombre ej61.js. Escribir un programa donde se ingresa un 
número entre 1 y 7 que representa un día de la semana y se obtiene un mensaje como 
salida. En caso de ingresar un número que no sea válido mostrar un mensaje de error.

Declarar la variable dia y asignar un número del 1 al 7. Declarar la variable 
nombreDelDia y asignar un valor null. Versión SWITCH, según el día seleccionado.
Entonces asignar el nombre del día correspondiente al número en la variable 
nombreDelDia (ejemplo: si dia es 1 entonces nombreDelDia debería ser 'lunes')
SINO Asignar el valor null en la variable nombreDelDía. Si nombreDelDía no es
null. Entonces mostrar el siguiente mensaje en consola: El día seleccionado 
es ${nombreDelDía} SINO mostrar el siguiente mensaje en consola: Por favor
seleccionar un número de 1 a 7. Versión IF/ELSE/IF, escribir la misma 
funcionalidad pero utilizando la estructura de If's anidados. El resultado debe 
ser el mismo. En ambos casos ingresar distintos números como valor de la 
variable dia y ver el resultado
 */

let dia = prompt('Ingrese un número entre del 1 al 7');
let nombreDelDia;
if(dia => 1 && dia <= 7){
    nombreDelDia = prompt('Ingrese el dia de la semana');
    switch(nombreDelDia){
        case 'lunes':
            document.write(`El dia ${dia} es lunes`);
            break;
        case 'martes':
            document.write(`El dia ${dia} es martes`);
            break;
        case 'miercoles':
            document.write(`El dia ${dia} es miercoles`);
            break;
        case 'jueves':
            document.write(`El dia ${dia} es jueves`);
            break;
        case 'viernes':
            document.write(`El dia ${dia} es viernes`);
            break;
        case 'sabado':
            document.write(`El dia ${dia} es sabado`);
            break;
        case 'domingo':
            document.write(`El dia ${dia} es domingo`);
            break;
        default:
            document.write(`Dia incorrecto`);
            break;
 
    }
}else{
    document.write('Ingresar un dia del 1 al 7')
}
