/**
 * Dado un array de letras, solicita un número de DNI y calcula que letra 
 * le corresponde. El número no puede ser negativo ni tener más de 8 digitos. 
 * La posicion de la letra es el resultado del modulo del número 
 * introducido entre 23.

const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y','F','P','D','X','B','N',
                'J','Z','S,'Q','V','H','L','C','K','E','T'];
 
 */

const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y','F','P','D','X','B','N', 'J','Z','S','Q','V','H','L','C','K','E','T'];

const dni = prompt('Introduce tu DNI');
if(dni.length==8 && parseInt(dni)>0){
    let letra = dni%23;
    console.log(`Tu DNI completo es  ${dni}${letras[letra]}`);
}
