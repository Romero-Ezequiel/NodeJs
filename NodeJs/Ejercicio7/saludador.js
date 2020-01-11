module.exports = function saludar(nombre, apellido, saludo = ()=>{
    console.log('Luego de saludar se ejecuta el callback');
}) {
    console.log(`Hola ${nombre} ${apellido}`);
    saludo();
}


