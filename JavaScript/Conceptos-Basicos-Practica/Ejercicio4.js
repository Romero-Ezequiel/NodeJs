/**
Escribe un programa que pida un número entero mayor que 1 y
que escriba si el número primo o no. Un número primo es aquel que 
solo es divisible por si mismo y la unidad
*/

let cont = 2, cont2 = 0, primo = 0, numero;

numero = prompt('Ingrese un numero: ');

while (cont <= numero) {
    while (cont2 < cont) {
        if (cont % cont2 == 0 && cont2 != 1 && cont2 != cont) {
            primo = 1;
        }
        cont2++;
    }

    if (primo == 0) {
        document.write(cont2 + '<br/>' );
    } else {
        primo = 0;
    }
    cont++;
    cont2 = 0;
}