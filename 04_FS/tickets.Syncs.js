//import fs from "fs"; HAY QUE HABILITAR MÓDULOS. SE VE LA PROXIMA CLASE

//import nombreDelModulo from "ruta del módulo ../"

const fs = require("fs");

const ruta = "./04_FS/data/tickets.json";

const datos = JSON.stringify(
    [
        { title: "hp1", place: "location" },
        { title: "hp2", place: "location" },
    ],
    null,
    2
);
//PARA CREAR UN ARCHIVO DE FORMA SINCRONA
fs.writeFileSync(ruta, datos);

//PARA LEER UN ARCHIVO DE FORMA SINCRONA
configuracion = "utf-8";
const datosLeidos = fs.readFileSync(ruta, configuracion);
const datosParseados = JSON.parse(datosLeidos);

console.log(datosParseados);
const existeArchivoAntes = fs.existsSync(ruta);

console.log(existeArchivoAntes);
//PARA ELIMINAR UN ARCHIVO DE FORMA SINCRONA
fs.unlinkSync(ruta); //--> SE ELIMINA EL ARCHIVO QUE SE ENCUENTRA EN LA RUTA
//PARA VERIFICAR LA EXISTENCIA DE FORMA SINCRONA

const existeArchivoDespues = fs.existsSync(ruta);

console.log(existeArchivoDespues);
