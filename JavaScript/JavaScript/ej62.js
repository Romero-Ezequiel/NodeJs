/**
 * Ejercicio 62
Crear un documento con el nombre ej62.js. Escribir un programa donde se ingresa un 
número que representa el mes y  se obtiene como salida un mensaje con el nombre del 
mes y la cantidad de días que tiene. 

Declarar la variable numeroDeMes y asignar un valor entre 1 y 12. Declarar 
la variable nombreDelMes y asignar un valor null. Declarar la variable 
cantidadDeDias y asignar un valor null. Según el número del mes entonces asignar 
el nombre del mes correspondiente en la variable nombreDelMes, asignar la cantidad 
de días que le corresponende al mes seleccionado SINo asignar null a las variables 
nombreDelMes y cantidadDeDias. Si nombreDelMes Y cantidadDeDiasson null. 
Entonces mostrar un mensaje de error: Ingrese un número entre 1 y 12
SINO, mostrar el siguiente mensaje: El mes seleccionado es ${nombreDelMes} y 
tiene ${cantidadDeDias} de días. Utilizar la siguiente lista de datos 
para resolver el ejercicio:

Enero 31 días
Febrero 28/29 días
Marzo 31 días
Abril 30 días
Mayo 31 días
Junio 30 días
Julio 31 días
Agosto 31 días
Septiembre 30 días
Octubre 31 días
Noviembre 30 días
Diciembre 31 días
*/

let numeroDeMes, nombreDelMes, cantidadDeDias;

numeroDeMes = prompt('Ingrese el número del meses: ');
if(numeroDeMes >= 1 && numeroDeMes <= 12){
    nombreDelMes = prompt('Ingrese el nombre del mes');
    switch(nombreDelMes){
        case 'enero':
            numeroDeMes == 1 ? document.write(`${nombreDelMes} 31 días`) : document.write('Volver a intentar');
            break;            
        case 'febrero':
            numeroDeMes == 2 ? document.write(`${nombreDelMes} 28 días`) : document.write('Volver a intentar'); 
            break;
        case 'marzo':
            numeroDeMes == 3 ? document.write(`${nombreDelMes} 31 días`) : document.write('Volver a intentar'); 
            break;
        case 'abril':
            numeroDeMes == 4 ? document.write(`${nombreDelMes} 30 días`) : document.write('Volver a intentar'); 
            break;
        case 'mayo':
            numeroDeMes == 5 ? document.write(`${nombreDelMes} 31 días`) : document.write('Volver a intentar'); 
            break;
        case 'junio':
            numeroDeMes == 6 ? document.write(`${nombreDelMes} 30 días`) : document.write('Volver a intentar'); 
            break;
        case 'julio':
            numeroDeMes == 7 ? document.write(`${nombreDelMes} 31 días`) : document.write('Volver a intentar'); 
            break;
        case 'agosto':
            numeroDeMes == 8 ? document.write(`${nombreDelMes} 31 días`) : document.write('Volver a intentar'); 
            break;
        case 'septiembre':
            numeroDeMes == 9 ? document.write(`${nombreDelMes} 30 días`) : document.write('Volver a intentar'); 
            break;
        case 'octubre':
            numeroDeMes == 10 ? document.write(`${nombreDelMes} 31 días`) : document.write('Volver a intentar'); 
            break;
        case 'noviembre':
            numeroDeMes == 11 ? document.write(`${nombreDelMes} 30 días`) : document.write('Volver a intentar'); 
            break;
        case 'diciembre':
            numeroDeMes == 12 ? document.write(`${nombreDelMes} 31 días`) : document.write('Volver a intentar'); 
            break;
        default:
            document.write('Error!!...');
            break; 
    }
}
else{
    document.write('Intente de nuevo....');
}