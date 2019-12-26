/**
 * Escribe un programa que permita ir introduciendo una serie indeterminada de
 * números mientras su suma no supere 50. Cuando esto ocurra, se debe mostrar 
 * el total acumulado y el contador de cuantos números
 * se han introducido
 */

let suma=0, contador;

while(suma <= 50){
    suma += parseInt(prompt('Ingrese un numero para añadir a la suma'));
    contador++;
}
document.write('La suma total es: '+ suma);
document.write('El total de numeros es '+ contador);
