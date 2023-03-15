const express = require('express');
const router = express.Router();

const datos = require('./data.json');

//verificacion consola //console.log(datos);

router.get('/', (req,res) =>{
    res.json(datos);
});

router.get('/:id', (req,res) =>{
    const {id} = req.params;
    datos.forEach(dato => {
        if(dato.id == id){
            res.json(dato);
        }
    });
});

router.post('/',(req,res) =>{
    const {id,Nombre,Años,IdentidadSecreta,Poderes} = req.body;
    if(id&&Nombre&&Años&&IdentidadSecreta&&Poderes){
        const id = datos.length +1;
        const nuevoDato = {...req.body, id};
        datos.push(nuevoDato);
        //console.log(nuevoDato);
        res.status(200).json(datos);
    }else{
        res.status(500).json({error:'no data'});
        //res.send("Err1: No Data");
    }
}
)

module.exports = router;