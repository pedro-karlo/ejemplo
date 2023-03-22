const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/difer')
.then(db => console.log('sha esta conectado'))

