const express = require('express');
//const router = require('./routes/routes.js');
const {join} = require('node:path');
//aqui arrancaremos el servidor
const cors = require('cors');

const app = express();
const PUERTO = 4000;

app.use(cors());
//directorio para ficheros estaticos
app.use(express.static(join(__dirname, 'public')));

app.use(require('./routes/routes.js'))
//asignamos el puerto
app.listen(PUERTO, console.log('Server running...'));