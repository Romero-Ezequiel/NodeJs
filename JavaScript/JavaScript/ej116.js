/**
 * Ejercicio 116
Crear un documento con el nombre ej116.js
Crear la función mejorJugadorArgentino que acepta como parámetro un número
Esta función retorna el nombre de un jugador según el número de camiseta que 
utilizó en la selección del 86. 

Utilizar la siguiente lista de jugadores: 

18 Nery Pumpido, 5 José Luis Brown, 9 José Cuciuffo, 19 Óscar Ruggeri,
14 Ricardo Giusti, 16 Julio Olarticoechea, 2 Sergio Batista,
12 Héctor Enrique, 7 Jorge Burruchaga, 10 Diego Armando Maradona,
11 Jorge Valdano.

En caso de que se ingrese un número que no corresponde a un jugardor retornar el
siguiente valor: 

Carlos Bilardo

Mostrar en consola el número pasado como parámetro y el nombre del jugador retornado
ejemplo: 
Si pasamos 10 como parámetro obtenemos Diego Armando Maradona como 
valor de retorno. Mostrar en consola: 10, Diego Armando Maradona
*/
const mejorJugadorArgentino = (numero) =>{
    //console.log(typeof(numero));
    if(typeof(numero) == 'number'){
        switch(numero){
            case 2: return '2, Sergio Batista'; break;
            case 5: return '5, José Luis Brown'; break;
            case 7: return '7, Jorge Burruchaga'; break;
            case 9: return '9, José Cuciuffo'; break;
            case 10: return '10, Diego Armando Maradona'; break;
            case 11: return '11, Jorge Valdano'; break;
            case 12: return '12, Héctor Enrique'; break;
            case 14: return '14, Ricardo Giusti'; break;
            case 16: return '16, Julio Olarticoechea'; break;
            case 18: return '18, Nery Pumpido'; break;
            case 19: return '19, Óscar Ruggeri'; break;
            default: return 'Carlos Bilardo';break;
        }
    }
    else{
        return 'Volver a intentar....';
    }
}

console.log(mejorJugadorArgentino(10));
console.log(mejorJugadorArgentino(2));
console.log(mejorJugadorArgentino(20));