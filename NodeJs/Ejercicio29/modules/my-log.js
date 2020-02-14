//Realizo dos funciones para luego utilizar estas funciones
//en el archivos indexedDB.js para eso las tengo que exportar los modulos locales.
const info = (text) =>{
    console.log("Información", text);
    return text;
}

const error = (text) =>{
    console.log("Error", text);
    return text;
}

module.exports = { info, error};