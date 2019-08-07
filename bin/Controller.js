const mongoose = require("mongoose");
const User = require("./models/User");
const Actividades = require("./models/Actividades");
const Usuarios = require("./models/Usuarios");
const Temas = require("./models/Temas");
const Docentes = require("./models/Docente");
const Curso = require("./models/Curso");
const Unidades = require("./models/Unidades");
const Registros = require("./models/Registros");



class Controller{
    constructor(){
        this.connect();
    }

    async connect(){
        try{
            await mongoose.connect(
                "mongodb+srv://DatabaseEC:programacion3.0@project-arlir.mongodb.net/MiniCursoIngles?retryWrites=true&w=majority",
                {useNewUrlParser:true}
            );
            console.log("Conectados a la base de datos")

        } catch(e){
            console.error(e)
        }
    }


    getUsers(res){
        User.find({}, (err, users)=>{
          if(err) throw err;

            res.send( users );
        })
    }

  getactividad(res){
        Actividades.find({}, (err, Actividades)=>{
          if(err) throw err;

            res.send( Actividades );
        })
    }

     getusuario(res){
        Usuarios.find({}, (err, Usuarios)=>{
          if(err) throw err;

            res.send( Usuarios );
        })
    }

         gettema(res){
        Temas.find({}, (err, Temas)=>{
          if(err) throw err;

            res.send( Temas );
        })
    }

          getcurso(res){
        Curso.find({}, (err, Curso)=>{
          if(err) throw err;

            res.send( Curso );
        })
    }

              getdocente(res){
        Docentes.find({}, (err, Docentes)=>{
          if(err) throw err;

            res.send( Docentes );
        })
    }

                  getunidades(res){
        Unidades.find({}, (err, Unidades)=>{
          if(err) throw err;

            res.send( Unidades );
        })
    }

                    getregistros(res){
        Registros.find({}, (err, Registros)=>{
          if(err) throw err;

            res.send( Registros );
        })
    }

//Usuario
setUsuario(Usuarios, res) {

        Usuarios.create(Usuarios, function(err, newUsuarios) {
            if (err) throw err;
            res.send({ status: 200, nU: newUsuarios });
        });
    }

}

exports.controller = new Controller()
