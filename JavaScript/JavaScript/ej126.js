/**
 * Ejercicio 126
Crear un documento con el nombre ej126.js
Copiar y pegar el código del ejercicio 125
Ahora los gustos de helado se piden en otro orden del que fueron ingresados
El primer elemento tiene que ser el último y el último el primero
Para agregar los gustos utilizar una función que acepte 2 parámetros, 
la colección de gustos de helados y el nuevo gusto
Esta función retorna la lista modificada
Mostrar en consola los gustos de helados
 */

let helados = ['crema del cielo', 'granizado', 'chocolate', 'dulce de leche',
    'frutillas', 'banana split', 'almendrado', 'amarena', 'crema con frutillas',
    'chocolate nevado']
//.reverse();

const mostrarGusto = (helados, gustoNuevo) => {
    let i = helados.length - 1;

    for (i; i >= 0; i--) {
        gustoNuevo.push(helados[i]);
    }
    console.log(gustoNuevo);
}

let gustoNuevo = [];
mostrarGusto(helados, gustoNuevo);

