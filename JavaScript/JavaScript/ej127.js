/**
 * Ejercicio 127
Crear un documento con el nombre ej127.js
Copiar y pegar el código del último ejercicio 126
A la lista final que mostramos en consola eliminarle los 2 primeros gustos y luego
asignar los gustos eliminados en un nuevo array de gustos que no tienen stock
Mostrar la lista de gustos que quedó
Mostrar la lista de gustos sin stock
 */

let helados = ['crema del cielo', 'granizado', 'chocolate', 'dulce de leche',
    'frutillas', 'banana split', 'almendrado', 'amarena', 'crema con frutillas',
    'chocolate nevado']

const mostrarGusto = (helados, gustoNuevo, stockArray) => {
    let i = helados.length - 1;

    for (i; i >= 0; i--) {
        gustoNuevo.push(helados[i]);
    }
    console.log(gustoNuevo);
    stockArray = gustoNuevo.splice(0,1);
    console.log(stockArray);
}

let gustoNuevo = [],
    stockArray = [];
mostrarGusto(helados, gustoNuevo, stockArray);
