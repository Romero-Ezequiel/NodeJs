/**
 * Ejercicio 70
Crear un documento con el nombre ej70.js
Mostrar en consola la suma parcial de todos los números 
impares que van desde 0 hasta 1000 utilizando la estructura while.
 */


let i=0, num=0, suma=0;

while( i <= 1000){
    if(num % 2 ==0){
        suma = suma + num;
        i=i+1;
    }
    num = num +1;
}

console.log(suma);