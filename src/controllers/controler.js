const accidentesModel = require('../models/accidentes.model');
const controler = {};
controler.raiz = async(req, res) => {
    let tipo_de_vehiculo_1 = req.query.tv1;
    let tipo_de_vehiculo_2 = req.query.tv2;
    let tipo_de_vehiculo_3 = req.query.tv3;
    let tipo_de_vehiculo_4 = req.query.tv4;
       
    const insertar = await accidentesModel.create({
        
        tipo_de_vehiculo_1: tipo_de_vehiculo_1, 
        tipo_de_vehiculo_2: tipo_de_vehiculo_2,
        tipo_de_vehiculo_3: tipo_de_vehiculo_3,
        tipo_de_vehiculo_4: tipo_de_vehiculo_4,
    }
    )
    res.json({id:insertar._id});
    }

    controler.get= async(req, res) =>{
        let id_objeto = req.query.id
        const objeto = await accidentesModel.find({_id:id_objeto})
        res.json({objeto}) 
    }

    controler.put= async(req, res)=>{
        let query_id = req.query.id
        let tipo_de_vehiculo_1 = req.query.tv1;
        let tipo_de_vehiculo_2 = req.query.tv2;
        let tipo_de_vehiculo_3 = req.query.tv3;
        let tipo_de_vehiculo_4 = req.query.tv4;

        const actual = await accidentesModel.updateOne({_id:query_id}, {
            tipo_de_vehiculo_1:tipo_de_vehiculo_1,
            tipo_de_vehiculo_2: tipo_de_vehiculo_2,
            tipo_de_vehiculo_3: tipo_de_vehiculo_3,
            tipo_de_vehiculo_4: tipo_de_vehiculo_4,
        })

        res.json({actual});
    }

    controler.delete= async(req,res)=>{
        let id = req.query.id
        const borra = await accidentesModel.deleteOne({_id:id})
        res.json({borra});
    }


module.exports = controler;