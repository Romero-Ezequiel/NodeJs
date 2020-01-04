/**
 * Ejercicio 80
Crear un documento con el nombre ej80.js
Copiar y pegar el código del ejercicio ej70.js
Refactorizar el código utilizando la estructura do/while en lugar de while
 * 
 */


let i=0, num=0, suma=0;

do{
    if(num % 2 ==0){
        suma = suma + num;
        i=i+1;
    }
    num = num +1;
}
while( i <= 1000)

console.log(suma);