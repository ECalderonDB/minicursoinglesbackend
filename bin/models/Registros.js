const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RegistrosSchema = new Schema({

    actividades_id: {
        type: Schema.Types.ObjectId,
        ref: "Actividades"
    },


     usuario_id: {
        type: Schema.Types.ObjectId,
        ref: "Usuario"
    },

    fecha_registro: String,
    hora_registro: String,
    nota: String,
    observacion: String

});

var Registros = mongoose.model("Registros", RegistrosSchema);
module.exports = Registros;