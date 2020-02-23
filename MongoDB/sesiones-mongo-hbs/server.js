const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const expressSession = require('express-session');
const expressHandlebars = require('express-handlebars');
const MongoClient = require('mongodb').MongoClient;

// Configuraciones de acceso a base testdb en MongoDB
const db = {
  url: 'mongodb://localhost:27017/',
  config: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4
  },
  nombre: 'testdb',
  nombreColeccionUsuarios: 'users'
}

// Objeto para servidor Express
const app = express();

// Configuración de Handlebars
app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views/layout')
}));
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'views'));


// Configuración de sesiones
app.use(expressSession({
  secret: 'el tiempo sin ti es empo',
  resave: false,
  saveUninitialized: false
}));

// Middleware de body-parser para interpretar datos recibidos de un form
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para recursos estáticos (css, js, ico, etc., requeridos desde el browser)
app.use(express.static(path.join(__dirname, 'public')));


// GET /
app.get('/', (req, res) => {
  console.log("GET /");
  if (req.session.usuarix) {
    res.render('home', { nombre: req.session.usuarix })
  } else {
    res.render('login');
  }
});


// POST /login
app.post('/login', (req, res) => {

  console.log('POST /login', 'body:', req.body);

  // Valido que se hayan recibido los datos de usuario y clave
  if (req.body.usuarix && req.body.password) {

    // Llamo a la función que valida usuario y clave
    validarUsuarix(req.body.usuarix, req.body.password, resultado => {

      if (resultado) {
        // Si validó bien, guardo la sesión y voy al home
        req.session.usuarix = req.body.usuarix;
        res.render('home', { nombre: req.session.usuarix });
      } else {
        // Si validó mal, destruyo la sesión (por si la hubiera) y recargo página inicial
        req.session.destroy();
        res.render('login', { mensaje: 'Usuarix/clave incorrectxs.', tipo: 'error' })
      }

    });

  } else {
    // Lo mismo si el usuarix o clave no fueron enviados
    req.session.destroy();
    res.render('login', { mensaje: 'Ingrese usuarix y clave', tipo: 'error' });
  }

});


// GET /registrar
// Retorna la vista de registro
app.get('/registrarse', (req, res) => {
  console.log("GET /registrarse");
  res.render('registro');
});


// POST /registrar
// Procesa información del formulario de registro
app.post('/registrar', (req, res) => {

  console.log('POST /registrar', 'body:', req.body);

  // Verifico que estén todos los datos
  if (req.body.usuarix && req.body.password && req.body.passwordRep) {

    // Verifico que la clave y su repetición coincidan
    if (req.body.password == req.body.passwordRep) {

      // Se llama a la función que guarde el registro
      registrarUsuarix(req.body.usuarix, req.body.password, resultado => {
        console.log(`Registro exitoso: ${resultado}`);
        if (resultado) {
          // Si guardó bien usuarix nuevx, redirijo al login
          req.session.destroy();
          res.render('login', { mensaje: 'Usuarix registrado correctamente', tipo: 'exito' });
        } else {
          // Si validó mal, destruyo la sesión (por si la hubiera) y recargo página de registro
          req.session.destroy();
          res.render('registro', { mensaje: 'Datos incompletos', tipo: 'error' });
        }
      });

    } else {

      // Si las claves no coinciden, se retorna la vista de registro y se indica el mensaje
      // correspondiente.
      req.session.destroy();
      res.render('registro', { mensaje: 'Las claves ingresadas no coinciden.', tipo: 'error' });

    }

  } else {

    // Si faltó algún dato, reenvío vista de registro con el mensaje
    req.session.destroy();
    res.render('registro', {
      mensaje: 'Debe completar el formulario para registrarse.',
      tipo: 'error'
    });

  }

});


// GET logout
app.get('/logout', (req, res) => {

  console.log("GET /logout");

  // Destruyo sesión y redirijo al login.
  req.session.destroy();
  res.render('login');

});


// Server iniciado en puerto 3000
app.listen(3000, () => {
  console.log('Escuchando puerto 3000 con Express');
});


/**
 * Valida usuarix/clave contra la lista de usuarixs registradxs (que en este
 * ejemplo es un array en memoria, debería ser base de datos)
 * 
 * @param {string} usr Usuarix
 * @param {string} pwd Clave
 * @param {function} callback Función de callback, se le pasa true o false
 */
function validarUsuarix(usr, pwd, callback) {

  // Me conecto al servidor de Mongo
  MongoClient.connect(db.url, db.config, (err, client) => {

    // Si no hubo error...
    if (!err) {

      // Apunto a la base y colección donde están los datos de usuarixs
      const colUsuarixs = client.db(db.nombre).collection(db.nombreColeccionUsuarios);

      // Busco un documento en la colección que tenga "user" y "pass" con los valores recibidos
      // por query string. Si usuario y clave son correctos, esa consulta tiene que devolver un
      // elemento, en caso contrario tiene que volver vacía.
      colUsuarixs.findOne({ user: usr, pass: pwd }, (err, resConsulta) => {

        // Hecha la búsqueda, cierro la conexión
        client.close();

        // Salida por consola del resultado para control
        console.log(resConsulta);

        // Si no hubo error...
        if (!err) {

          // Si el documento respondido contiene algo, no necesito validar nada: ya sé que
          // usuario y clave estaban bien. Caso contrario, alguno de los dos datos estaba mal.
          if (resConsulta) {
            callback(true);
          } else {
            callback(false);
          }

        } else {
          // Si hubo error de consulta, respondemos un false
          callback(false);
        }
      });

    } else {
      // Si hubo error de conexión a Mongo, respondemos false
      callback(false);
    }

  });

}


/**
 * Registra usuarix nuevo en la lista de usuarixs (que en este
 * ejemplo es un array en memoria, debería ser base de datos)
 * 
 * @param {string} usr Usuarix
 * @param {string} pwd Clave
 * @param {function} callback Función de callback, se le pasa true o false
 */
function registrarUsuarix(usr, pwd, callback) {

  // Me conecto a Mongo
  MongoClient.connect(db.url, db.config, (err, client) => {

    if (!err) {

      // Base de datos/colección de usuarixs
      const colUsuarixs = client.db(db.nombre).collection(db.nombreColeccionUsuarios);

      // Inserto un nuevo documento con user/pass.
      colUsuarixs.insertOne({ user: usr, pass: pwd }, (err, result) => {

        // Si no hubo error, respondo true. Si hubo error, false.
        if (!err) {
          callback(true);
        } else {
          callback(false);
        }

      });

    } else {
      // Si no se pudo conectar al servidor, respondo false.
      callback(false);
    }

  });

}