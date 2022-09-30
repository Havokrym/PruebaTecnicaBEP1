const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let accidentesSchema = Schema({
    fecha_event: Date,
    hora: String,
    tipo_event: String,
    coor_x: String,
    coor_y: String,
    colonia: String,
    alcaldia: String,
    tipo_de_interseccion: String,
    tipo_de_vehiculo_1: String,
    tipo_de_vehiculo_2: String,
    tipo_de_vehiculo_3: String,
    tipo_de_vehiculo_4: String,
    marca_de_vehiculo_1: String,
    marca_de_vehiculo_2: String,
    marca_de_vehiculo_3: String,
    marca_de_vehiculo_4: String,
    unidad_medica_de_apoyo: String,
    prioridad: String,
    color_vehiculo_1: String,
    color_vehiculo_2: String,
    color_vehiculo_3: String 
}
);
module.exports = mongoose.model('accidentes', accidentesSchema);