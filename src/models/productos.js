const {Schema, model} = require('mongoose')

const ProductSchema = new Schema({
    Nombre:{type:String, required:true},
    Años:{type:Number, required:true},
    IdentidadSecreta:{type:String, required:true},
    Poderes:{type:String, required:true},
    },{
        timestamps:true, //agregar tiempo de creacion 
        versionKey:false

    }
)

module.exports = model('Producto', ProductSchema)