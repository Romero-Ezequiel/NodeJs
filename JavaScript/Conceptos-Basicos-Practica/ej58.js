/**
 * Ejercicio 58
Crear un documento con el nombre ej58.js
Declarar la variable hora
Establecer un valor entre 0 y 24
Si la hora es menor que 12 y mayor que 5 entonces
Mostrar el mensaje: Buen día
Si la hora es menor o igual que 12 y mayora que 20 entonces
Mostrar el mensaje: Buenas tardes
Si No:
Mostrar el mensaje: Buenas noches
Cambiar el valor de la variable hora un par de veces y ejecutarlo para ver que pasa
 */

let hora = 17;

if(hora < 12 && hora > 5){
    console.log('Buen dia');

}else if(hora <= 12 && hora > 20){
    console.log('Buenas tardes');

}else{
    console.log('Buenas noches');
}