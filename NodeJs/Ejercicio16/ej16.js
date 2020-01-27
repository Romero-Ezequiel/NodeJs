/**
 * Ejercicio 16
Crear una carpeta con el nombre ej16
Crear la siguiente estructura:
.
├── index.js
└── index.html
└── public
    ├── css
        └── style.css
    ├── js
        └── script.js
    ├── img
        └── foto.png
    
index.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Documentos Estáticos en Node y Express</title>
  <link rel="stylesheet" href="/css/styles.css">
  <script src="/js/script.js"></script>
</head>
<body>
  <h1>Rick & Morty!!</h1>
  <img src="/img/yeay.jpg" alt="Vamosooooossssssss" />
</body>
</html>
css/style.css
body {
  background-color: #eee;
  color: green;
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
  font-weight: normal;
}

img {
  border-radius: 5px;
}
js/script.js
console.log('Estamos sirviendo un archivo ECMAScript desde el servidor!!!!!)
img
Copiar la siguiente imagen dentro de la carpeta img de tu nuevo sitio ej16
index.js
Levantar un servidor de Express
Configurar la carpeta public para que pueda exponer y servir contenido estático 
(/Users/nisnardi/Documents/cursos/comunidad-it/comunidad-it-js/assets/node/yeay.jpg).
 */