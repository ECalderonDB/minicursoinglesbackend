const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UnidadesSchema = new Schema({
    nombre_unidad: String,
    objetivo_unidad: String,


 Curso_id: {
        type: Schema.Types.ObjectId,
        ref: "curso"
    },


});

var Unidades = mongoose.model("unidades", UnidadesSchema);
module.exports = Unidades;