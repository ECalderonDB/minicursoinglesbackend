const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActividadesSchema = new Schema({
    nombre_actividad: String,
    tipo_actividad: String,
    fecha_entrega: String,

    });


var Actividades = mongoose.model("actividades", ActividadesSchema);
module.exports = Actividades;