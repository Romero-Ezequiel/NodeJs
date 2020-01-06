/**
 * Crea un clase libro
 * La clase libro tendra titulo, autor, año y genero. Crea un método que devuelva
 * toda la información del libro. Pide 3 libros y guardalos en un array. Los libros
 * se introducirán al arrancar el programa pidiendo los datos con prompt. 
 * Validar que los campos no se introduzca vacios, validar que el año sea un número
 * y que tenga 4 digitos. Validar que el genero sea: aventuras, terror o fantasia
 * crea una funcion que muestre todos los libros, crea una funcion que muestre
 * los autos ordenados alfabeticamente.
 * Crea una funcion que pida un genero y muestre la informacion de los libros que 
 * pertenezcan a ese genero usando un metodo que devuelvan la informacion.
 */

class libro{
    constructor(titulo, autor, anio, genero){
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
        this.genero = genero;
    }

    libroinfo(){
        return(`El titulo del libro es ${this.titulo},
                 El autor del libro es ${this.autor},
                 El año que se publico el libro ${this.anio},
                 El genero del libro ${this.genero}`);
    }   
}

//Creo un array vacio para guardar los libros
let librosArray = [];

while(librosArray.length < 3){
    let titulo = prompt('Introduce el titulo del libro'); 
    let autor = prompt('Introduce el nombre del autor');
    let anio = prompt('Introduce el año que se publico el libro');
    let genero = prompt('Introduce el genero del libro');

    if(titulo != '' && autor != '' && !isNaN(anio) && (genero == 'aventura'||
    genero == 'terror' || genero == 'fantasia')){
        //Aca agrego el libro al array
        librosArray.push(new libro(titulo, autor, anio, genero))
    }
}

const mostrarlibros = ()=>{
    console.log(librosArray);
}

mostrarlibros();