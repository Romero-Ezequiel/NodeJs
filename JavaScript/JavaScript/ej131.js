/**
 * Ejercicio 131
Crear un documento con el nombre ej131.js
Crear un array con el nombre de 5 alumnas del curso
Crear un array con el nombre de 5 alumnos del curso
Crear un array con el nombre de los alumnos y alumnas del curso
Mostrar en consola los siguiente nombres de forma individual (uno por linea):
Nombres de las alumnas (a mano utilizando índices)
Nombres de los alumnos (utilizando while)
Nombres de todos los alumnos del curso (utilizando for)
 */

let nombreAlumnas = ['Gabriela', 'Camila', 'Celeste', 'Luana', 'Lourdes'];
let nombreAlumnos = ['Ezequiel','Dario','Lucas','Enrique','Leandro'];
let nombresAlumnxs = ['Gabriela','Ezequiel','Camila','Dario','Celeste','Lucas',
'Luana','Enrique','Lourdes','Leandro'];

console.log('********************* Utilizando índices *********************');
console.log(`${nombreAlumnas[0]} ${nombreAlumnas[1]} ${nombreAlumnas[2]} ${nombreAlumnas[3]} ${nombreAlumnas[4]}`);

console.log('********************* Utilizando while *********************');
let i=0;
while(i <= nombreAlumnos.length - 1){
    console.log(nombreAlumnos[i]);
    i++;
}

console.log('********************* Utilizando for *********************');
for(let i=0; i<nombresAlumnxs.length; i++){
    console.log(nombresAlumnxs[i]);
}