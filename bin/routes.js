const express = require("express");
const app = express();
const { controller } = require("./Controller")

app.get("/", (req, res )=>{
    res.send("Hola Mundo");
})

app.get("/curso/:fecha_inicio_curso", (req, res )=>{
    var fecha_inicio_curso = req.params.fecha_inicio_curso;
    console.log(fecha_inicio_curso)
    res.send("para el curso");
})



app.get("/usuarios/:nombre", (req, res )=>{
    var nombre = req.params.nombre;
    console.log(nombre)
    res.send("Hola Mundo");
})

app.get("/docente/:alias_docente", (req, res )=>{
    var alias_docente = req.params.alias_docente;
    console.log(alias_docente)
    res.send("Para el docente");
})

app.get("/registros/:fecha_registro", (req, res )=>{
    var fecha_registro = req.params.fecha_registro;
    console.log(fecha_registro)
    res.send("para el registro");
})

app.get("/unidades/:nombre_unidad", (req, res )=>{
    var nombre_unidad = req.params.nombre_unidad;
    console.log(nombre_unidad)
    res.send("para la unidad");
})

app.get("/temas/:nombre_tema", (req, res )=>{
    var nombre_tema = req.params.nombre_tema;
    console.log(nombre_tema)
    res.send("para el tema");
})



app.get("/actividades/nombre_actividad", (req, res )=>{
    var nombre_actividad = req.params.nombre_actividad;
    console.log(nombre_actividad)
    res.send("para la nota");
})


app.get("/actividad/:tipo_actividad", (req, res )=>{
    var tipo_actividad = req.params.tipo_actividad;
    console.log(tipo_actividad)
    res.send("Para la actividad");
})


app.get("/users", (req, res)=>{
    /*let users = [
        { name:"Pepe", password:"jhiuh89"},
        { name:"Juan", password:"dfbffg9"},
    ]

        res.send(users);*/
        controller.getUsers(res);
})

app.get("/Actividades", (req, res)=>{
    /*let users = [
        { nombre_actividad:"Pepe", tipo_actividad:"jhiuh89", fecha_entrega: "26 05 19"},

    ]

        res.send(users);*/
        controller.getactividad(res);
})

app.get("/usuarios", (req, res)=>{

        controller.getusuario(res);
})

app.get("/temas", (req, res)=>{

        controller.gettema(res);
})

app.get("/docentes", (req, res)=>{

        controller.getdocente(res);
})

 app.get("/Curso", (req, res)=>{

        controller.getcurso(res);
})

 app.get("/Unidades", (req, res)=>{

        controller.getunidades(res);
})

 app.get("/Registros", (req, res)=>{

        controller.getregistros(res);
})


//Agregar al Curso, un Usuario
app.post("/usuarios", (req, res) => {
    let { Usuarios } = req.body;
    controller.setUsuario(Usuarios, res);

});



exports.app = app;