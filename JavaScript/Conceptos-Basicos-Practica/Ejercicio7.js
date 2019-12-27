/**
 * Crea 3 arrays. El primero tendra 5 números y el segundo se llamará pares y 
 * el tercero impares, ambos estarán vacios. Despues multiplica cada uno de
 * los números del primer array por un número aleatorio entre 1 y 10, si el 
 * resultado es par guarda ese número en el array de pares y si es impar en 
 * el array de impares.
 * 
 * Muestra por consola:
 * - La multiplicacion que se produce junt con su resultado con el formato 2*3 = 16
 * - El array de pares e impares
 */

const numeros = [5, 10, 20, 100, 3];
let pares = [], impares = [];

for(const numero of numeros){
    let random = Math.random() * 10 + 1;
    const result = Math.round(numero * random);

    console.log(numeros +' x '+ random + ' = '+ result)
    if(result % 2 == 0){
        pares.push(result);
    }else{
        impares.push(result);

    }
}
console.log(pares);
console.log(impares);