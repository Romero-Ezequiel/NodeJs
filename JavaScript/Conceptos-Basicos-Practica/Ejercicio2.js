/**

Escribe un programa que pueda calcular el area de 3 figuras geometricas,
triangulo, rectangulo y circulo. 
En primer lugar preguntar de que figura se quiere calcular el area, 
despues solicita los datos que necesitas para calcularlo.

Triangulo = (b*h)/2
Rectangulo = b*h
Circulo = alfa*r2(pi * r2)

*/

let triangulo, rectangulo, circulo, b, h, radio, preguntar;

preguntar = prompt('De que figura se quiere calcular el area: ');

if (preguntar == 'triangulo'){
    b = prompt('Ingrese la base del triangulo: ');
    h = prompt('Ingrese la altura del triangulo: ');

    triangulo = (parseFloat(b * h)/2);
    alert('El area del triangulo es : ' +triangulo);
}
else if(preguntar == 'rectangulo'){
    b = prompt('Ingrese la base del rectangulo: ');
    h = prompt('Ingrese la altura del rectangulo: ');

    rectangulo = (parseFloat(b * h));
    alert('El area del rectangulo es : ' +rectangulo);
}
else if(preguntar == 'circulo'){
    radio = prompt('Ingrese el radio del circulo: ');
    
    circulo = (radio**2 (Math.PI * radio**2));
    alert('El area del circulo es : ' +circulo);
}
