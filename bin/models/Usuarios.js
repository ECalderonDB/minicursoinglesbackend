const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UsuariosSchema = new Schema({
    nombre: String,
    apellido: String,
    direccion: String,
    telefono: String,
    email: String,
    alias_usuario: String,
    constrasena:  String,


   Curso_id: {
        type: Schema.Types.ObjectId,
        ref: "curso"
    },

});

var Usuarios = mongoose.model("usuarios", UsuariosSchema);
module.exports = Usuarios;