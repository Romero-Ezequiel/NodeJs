/**
Solicita un número e imprime todos los números pares e impares 
desde 1 hasta ese número con el mensaje "es par" o "es impar" 
si el número es 5 el resultado será:

 1- Es impar
 2- Es par
 3- Es impar
 4- Es par
 5- Es impar
 */

var numero = 5;

for(var i=0; i < numero   ; i++){

    if(i % 2 == 0){
        console.log((i+1) +' Es par');
    }else{
        console.log((i+1)+ ' Es impar');
    }
}
