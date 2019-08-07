const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DocentesSchema = new Schema({
    nombres: String,
    apellidos: String,
    direccion: String,
    telefono: String,
    nivel_ingles: String,
    alias_docente: String,
    contrasena: String,


 Curso_id: {
        type: Schema.Types.ObjectId,
        ref: "curso"
    },


});

var Docentes = mongoose.model("docentes", DocentesSchema);
module.exports = Docentes;