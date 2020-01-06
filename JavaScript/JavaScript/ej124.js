/**
 * Ejercicio 124
Crear un documento con el nombre ej124.js
Crear una array con el nombre peliculas
Asignar los nombres de películas que te gusten (al menos 10)
Mostrar en consola el nombre de la primer y última película de la lista
Para el último elemento no se puede usar un índice a mano sino que
hay que hacerlo de forma dinámica como si no sabemos la cantidad
exacta de elementos
 */

let peliculas = ['El dia despues de mañana','En busca de la felicidad',
'Troya','Hombre en llama','El niño que domo al viento','Rapido y Furioso',
'Harry Potter','Las guerras de las galaxias','King kong','Jumanji'];

for(let i=0; i <= peliculas.length-1; i++){
    console.log(peliculas[i]);
}