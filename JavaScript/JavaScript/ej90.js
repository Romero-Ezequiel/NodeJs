/**
 * Ejercicio 90
Crear un documento con el nombre ej90.js
Copiar y pegar el código del ejercicio ej80.js
Refactorizar el código utilizando la estructura for en lugar de do/while
 */

let i=0, num=0, suma=0;

for(let i=0; i <= 1000; i++){
    if(num % 2 ==0){
        suma = suma + num;
        i=i+1;
    }
    num = num +1;
}
console.log(suma);


