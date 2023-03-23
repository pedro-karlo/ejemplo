require('./routes/database')
const express = require('express');
const app = express();
const morgan = require('morgan');

//configuraciones
app.set('port', 3000);
app.set('json spaces', 3);

//Middleboard
app.use(morgan('dev')); //Marca los errores, se puede cambiar por 'combined'
app.use(express.json());

//rutas
app.use('/api/super',require('./routes/rutas'));



//Empezando el servidor
app.listen(app.get('port')); //localhost:6969
console.log("Mi primer servidor");