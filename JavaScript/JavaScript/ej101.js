/**
 * Ejercicio 101
Crear un documento con el nombre ej101.js
Declarar una función que muestre los siguientes datos en consola:
Tu Nombre
Edad
Teléfono
Calle
Altura
Código postal
Casado true/false
 */

const datos = () =>{
    let nombre, edad, tel, calle, altura, codig, casad;

    nombre = prompt('Ingrese tu nombre ');
    edad = prompt('Ingrese tu edad ');
    tel = prompt('Ingrese tu telefono ');
    calle = prompt('Ingrese tu calle en donde vives ');
    altura = prompt('Ingrese la altura de donde vives ');
    codig = prompt('Ingrese el codigo postal ');

    const comprobar = () =>{
        casad = prompt('Ingrese true si estas casado sino false');
        switch(casad){
            case 'true': return 'esta casado';break;
            case 'false': return 'no esta casado';break;
            default: return 'incorrecto';break; 
        }
    }
    
    document.write(`Tu nombre es: ${nombre}, su edad ${edad} años, 
                    su telefono ${tel}, su calle en donde vives ${calle},
                    su altura ${altura}, su codigo postal ${codig}, su
                    estado civil es ${comprobar()} `);
}
datos();