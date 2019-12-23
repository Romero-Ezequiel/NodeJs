/**
Escriba un programa que pida un número entero mayor que cero y calcule su factorial. 
El factorial es el resultado de multiplicar ese número por sus anteriores hasta 
la unidad.

5! = 5*4*3*2*1 = 120

*/

let numero;

numero = prompt('Ingrese un numero: ');

const  factorial = (numero) =>{
    if (numero === 0 || numero === 1){
        return 1;
    }
    for(var i=numero-1; i >= 1; i--){
        numero = numero * i;
    }
    return numero
}
document.write(factorial(5));
