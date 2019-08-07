const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const CursoSchema = new Schema({
    nombre_curso: String,
    duracion_curso: String,
    fecha_inicio_curso: String,
    fecha_final_curso: String,
});

var Curso = mongoose.model("curso", CursoSchema);
module.exports = Curso;