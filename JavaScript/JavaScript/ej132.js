/**
 * Ejercicio 132
Crear un documento con el nombre ej132.js
Copiar la lista de mutantes del ejercicio 130
Si James "Logan" Howlett Y Prof. Charles Francis Xavier están en
la lista de mutantes entonces:
Mostrar: Amamos a los X-men
Sino
Mostrar: Los X-men apestan
 */

let mutantes = ['Prof. Charles Francis Xavier', 'Scott Summers',
    'Dr. Henry Philip "Hank" McCoy', 'Jean Elaine Grey',
    'Calvin Montgomery Rankin', 'Kevin Sydney', 'Lorna Sally Dane',
    'Alexander Summers', 'Suzanne Chan', 'James "Logan" Howlett', 'Ororo Monroe'];

for (let i = 0; i <= mutantes.length-1; i++) {
    
    if(mutantes[i] == 'James "Logan Howlett"' || mutantes[i] == 'Prof. Charles Francis Xavier'){
        console.log('Amamos a los X-men');
    }
}