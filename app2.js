const EventEmitter = require('events')
const emisor = new EventEmitter();


function saludo(nombre){
    console.log(`hola que tal ${nombre}`);
}


emisor.on("prueba", saludo)


emisor.emit("prueba", "sebastian")