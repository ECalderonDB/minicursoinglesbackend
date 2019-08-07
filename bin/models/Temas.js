const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TemasSchema = new Schema({

    id: Number,
    nombre_tema: String,
    subtemas: String,

    unidades_id: {
        type: Schema.Types.ObjectId,
        ref: "Unidades"
    },


});

var Temas = mongoose.model("Temas", TemasSchema);
module.exports = Temas;
