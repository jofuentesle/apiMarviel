//importamos variables de entrono
require('dotenv').config();

//importamos express
const express = require('express');
//importamos db
const { dbConnection } = require('./db/config');
//importamos cors
const cors = require('cors');


//creamos servidor
const app = express();

//configurar cors
app.use( cors() );

//carpeta publica
app.use( express.static('public'))

//lectura body
app.use( express.json() );

//conectamos db
dbConnection();

//rutas
app.use('/', require('./routes/marvel.routes'));
app.use('/usuarios', require('./routes/usuarios.routes'));
app.use('/login', require('./routes/auth.routes'));



//levantamos servidor
app.listen( process.env.PORT || 3000, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
});