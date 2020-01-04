/**
 * Ejercicio 75
Crear un documento con el nombre ej75.js
Escribir un programa que muestre en consola la secuencia de 
Fibonacci para los primeros 10 números utilizando la estructura while
Podes leer más sobre esta secuencia en Wikipedia
Acá podes encontrar una pequeña ayuda
 */

const fibonacci = () =>{
    let fibo1=1, fibo2=1, pos=1, numero=10;

    while(numero > fibo1 && numero > fibo2){
        if(fibo1 > fibo2){
            fibo1 += fibo2;
        }else{
            fibo2 += fibo1;
        }
        pos++;
    }
    if(numero == fibo1 || numero == fibo2){
        return ("El numero "+ numero+ " pertenece a la sucesion y se encuentra en la posicion "+ (pos+1));
    }else{
        return ("El numero "+ numero+ " no pertenece a la sucesion Fibonacci")
    }
}

console.log(fibonacci());

