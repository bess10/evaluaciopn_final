const express = require('express');
//const router = require('./routes/routes.js');
const {join} = require('node:path');
const cors = require('cors');

const app = express();
const PUERTO = 4000;

app.use(cors());
app.use(express.static(join(__dirname, 'public')));
app.use(require('./routes/routes.js'))
app.listen(PUERTO, console.log('Server running...'));