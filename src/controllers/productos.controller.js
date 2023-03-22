const productosCtrl = {}

const producto = require('../models/productos.js')
//const productos = require('../routes/data.json');

productosCtrl.getProducts = async (req, res) => {
    const productos = await producto.find()
    res.json(productos)
}

productosCtrl.createProduct = async(req,res) => {
    const newProduct = new producto(req.body);
    await newProduct.save();
    //console.log(newProduct);
    res.send({message: 'PRODUCTO AGREGADO'})
}

productosCtrl.getProduct = async(req, res) =>{
    //console.log(req.params)
    const productoID = await producto.findById(req.params.id);
    res.send(productoID)
}

productosCtrl.deleteProduct = async(req, res) =>{
    //console.log(req.params)
    const productoID = await producto.findByIdAndDelete(req.params.id);
    res.send({message: 'producto eliminado', productoID})
}

productosCtrl.updateProduct = async(req, res) =>{
    //console.log(req.params)
    const productoID = await producto.findByIdAndUpdate(req.params.id, req.body);
    res.send({message: 'producto eliminado', productoID})
}

module.exports = productosCtrl;