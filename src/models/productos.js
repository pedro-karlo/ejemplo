const {Schema, model} = require('mongoose')

const ProductSchema = new Schema({
    id:{type:Number, required:true},
    Nombre:{type:string, required:true},
    Años:{type:Number, required:true},
    IdentidadSecreta:{type:string, required:true},
    Poderes:{type:string, required:true},
    },{
        timestamps:true, //agregar tiempo de creacion 
        versionKey:false

    }
)

module.exports = model('Producto', ProductSchema)