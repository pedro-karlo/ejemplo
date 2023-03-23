const { Router } = require('express');
const router = Router();

//const productos = require('../models/productos');
//const router = express.Router();

//const datos = require('./data.json');
//console.log(productos);

const productosCtrl = require('../controllers/productos.controller')


//verificacion consola //console.log(datos);

router.get('/', productosCtrl.getProducts);

router.get('/:id', productosCtrl.getProduct);

router.delete('/',productosCtrl.deleteProduct);

router.put('/',productosCtrl.updateProduct);

router.post('/',productosCtrl.createProduct);

module.exports = router;

//grande pxndx grande pxndx ep jose madero 16 de marzo