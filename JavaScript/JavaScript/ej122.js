/**
 * Ejercicio 122
Crear un documento con el nombre ej122.js
Crear un array con el nombre ingredientes y asignar los siguientes elementos:

Carne de cerdo, Tomate, Pollo, Lechuga, Lomo, Zanahoria, Rúcula

Declarar un nuevo array vegetariano y asginar sólo los ingredientes que deberían 
estar en la lista vegetariana
Mostrar en consola las dos listas con menú regular y versión vegetariano
 */

let ingredientes = ['Carne de cerdo','Tomate','Pollo','Lechuga',
'Lomo','Zanahoria','Rúcula'];

let vegetariano = [ingredientes[1],ingredientes[3],ingredientes[5],ingredientes[6]];

let carnes = [ingredientes[0], ingredientes[2], ingredientes[4]];

console.log(`********** Menú *************\n
Menú con verduras:  ${vegetariano}\nMenú con carnes:  ${carnes}`)