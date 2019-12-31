/**
 * Solicitar al usuario una palabra y mostrar por consola el número de 
 * consonantes, vocales y longitud de la palabra
 */

const palabra;
let vocales=0, consonantes=0;

palabra = prompt('Ingrese una palabra: ').toLocaleLowerCase();

for(const letra of palabra){
    if(letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'){
        vocales++
    }else{
        consonantes++
    }
}

console.log('Tu palabra tiene '+ vocales ' vocales '+ ' y tiene '+ consonantes + ' consonantes');

