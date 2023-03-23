const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/difer',
    //useNewUrlParser: true
    //useUnifiedTopology: true
)
.then(db => console.log('sha esta conectado'))
.catch((err) => console.error(err));


