/**
 * Ejercicio 63
Crear un documento con el nombre ej63.js
Escribir un programa que acepta como ingreso un número que representa un
año (por ejemplo 2000) y muestra como salida el nombre del campéon de ese 
año del fútbol argentino. Los datos se pueden obtener desde el siguiente sitio: 
http://www.afa.org.ar/institucional/campeones-primera-division.php

Utilizar sólo los últimos años (desde 2000 hasta el 2017)
En caso de tener más de un campéon por año mostrar los distintos 
campeonatos en una sola variable. Según el año seleccionado Entonces
Mostrar el siguiente mensaje: En el año ${anio} salió campeón: ${campeon}
SINO
Mostrar un mensaje con el siguiente error: Por favor ingrese un año 
entre 2000 y 2017. Datos en caso de que no funcione el link:

2000 (Clausura) River Plate (Apertura) Boca Juniors 
2001 (Clausura) San Lorenzo de Almagro (Apertura) Racing Club 
2002 (Clausura) River Plate (Apertura) Independiente
2003 (Clausura) River Plate (Apertura) Boca Juniors 
2004 (Clausura) River Plate (Apertura) Newell´s Old Boys 
2005 (Clausura) Vélez Sarsfield (Apertura) Boca Juniors 
2006 (Clausura) Boca Juniors (Apertura) Estudiantes de La Plata 
2007 (Clausura) San Lorenzo de Almagro (Apertura) Lanús 
2008 (Clausura) River Plate (Apertura) Boca Juniors 
2009 (Clausura) Vélez Sársfield (Apertura) Bánfield 
2010 (Clausura) Argentinos Juniors (Apertura) Estudiantes de La Plata 
2011 (Clausura) Vélez Sársfield (Apertura) Boca Juniors 
2012 (Clausura) Arsenal F.C. (Torneo Inicial) Vélez Sarsfield 
2013 (Torneo Final) Newells Old Boys (Campeón del Campeonato de Primera División 2012/13)
Vélez Sarsfield (Torno Inicial) San Lorenzo de Almagro 
2014 (Torneo Final) River Plate (Torneo Inicial) Racing Club 
2015 (Campeonato de Primera División) Boca Juniors 
2016 (Campeonato de Primera División) Lanús 
2017 (Campeón del Campeonato de Primera División 2016/17) Boca Juniors
 */
let anio = parseInt(prompt('Ingresar un año entre 2000 y 2017 que deseas saber quien salio campeón: '));
let campeonArray;
campeonArray = ['2000 (Clausura) River Plate (Apertura) Boca Juniors',
'2001 (Clausura) San Lorenzo de Almagro (Apertura) Racing Club',
'2002 (Clausura) River Plate (Apertura) Independiente',
'2003 (Clausura) River Plate (Apertura) Boca Juniors',
'2004 (Clausura) River Plate (Apertura) Newell´s Old Boys',
'2005 (Clausura) Vélez Sarsfield (Apertura) Boca Juniors',
'2006 (Clausura) Boca Juniors (Apertura) Estudiantes de La Plata', 
'2007 (Clausura) San Lorenzo de Almagro (Apertura) Lanús',
'2008 (Clausura) River Plate (Apertura) Boca Juniors',
'2009 (Clausura) Vélez Sársfield (Apertura) Bánfield',
'2010 (Clausura) Argentinos Juniors (Apertura) Estudiantes de La Plata', 
'2011 (Clausura) Vélez Sársfield (Apertura) Boca Juniors',
'2012 (Clausura) Arsenal F.C. (Torneo Inicial) Vélez Sarsfield', 
'2013 (Torneo Final) Newells Old Boys (Campeón del Campeonato de Primera División 2012/13) Vélez Sarsfield (Torno Inicial) San Lorenzo de Almagro',
'2014 (Torneo Final) River Plate (Torneo Inicial) Racing Club', 
'2015 (Campeonato de Primera División) Boca Juniors',
'2016 (Campeonato de Primera División) Lanús',
'2017 (Campeón del Campeonato de Primera División 2016/17) Boca Juniors',
];

if(anio >= 2000 && anio <= 2017){
    switch(anio){
        //En el año ${anio} salió campeón: ${campeon}
        case 2000: document.write(`En el año ${anio} salió campeón: ${campeonArray[0]}`);break;
        case 2001: document.write(`En el año ${anio} salió campeón: ${campeonArray[1]}`);break;
        case 2002: document.write(`En el año ${anio} salió campeón: ${campeonArray[2]}`);break;
        case 2003: document.write(`En el año ${anio} salió campeón: ${campeonArray[3]}`);break;
        case 2004: document.write(`En el año ${anio} salió campeón: ${campeonArray[4]}`);break;
        case 2005: document.write(`En el año ${anio} salió campeón: ${campeonArray[5]}`);break;
        case 2006: document.write(`En el año ${anio} salió campeón: ${campeonArray[6]}`);break;
        case 2007: document.write(`En el año ${anio} salió campeón: ${campeonArray[7]}`);break;
        case 2008: document.write(`En el año ${anio} salió campeón: ${campeonArray[8]}`);break;
        case 2009: document.write(`En el año ${anio} salió campeón: ${campeonArray[9]}`);break;
        case 2010: document.write(`En el año ${anio} salió campeón: ${campeonArray[10]}`);break;
        case 2011: document.write(`En el año ${anio} salió campeón: ${campeonArray[11]}`);break;
        case 2012: document.write(`En el año ${anio} salió campeón: ${campeonArray[12]}`);break;
        case 2013: document.write(`En el año ${anio} salió campeón: ${campeonArray[13]}`);break;
        case 2014: document.write(`En el año ${anio} salió campeón: ${campeonArray[14]}`);break;
        case 2015: document.write(`En el año ${anio} salió campeón: ${campeonArray[15]}`);break;
        case 2016: document.write(`En el año ${anio} salió campeón: ${campeonArray[16]}`);break;
        case 2017: document.write(`En el año ${anio} salió campeón: ${campeonArray[17]}`);break;
        default:
            document.write('Volver a intentar');
            break;
    }
}else{
    document.write('Por favor ingrese un año entre 2000 y 2017');
}