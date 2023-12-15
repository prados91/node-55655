//requiero los modulos necesarios para crear el servidor
//en este caso http

const http = require("http"); //requiero el modulo necesario para gestionar servidores (crearlo, configurarlo y levantarlo)

const server = http.createServer(); //metodo de http para crear un servidor.

const PORT = 8080; //para iniciar el servidor necesito dos parámetros: PUERTO DONDE VA A FUNCIONAR [8080] - CALLBACK PARA INFORMAROS QUE EL SERVIDOR ESTÁ FUNCIONANDO
const cbReady = () => {
    console.log("Server ready on port " + PORT); // Importante mostrar en consola el puerto donde el sv está funcionando.
    console.log("My first server");
    console.log("Coder server");
};
server.listen(PORT, cbReady); //listen() -> metodo necesario para iniciar el servidor.
