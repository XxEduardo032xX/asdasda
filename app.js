//El 'events' es el modulo events, esto es un modulo que retorna una clase y esa clase se llama
//EventEmitter, por esa razon creamos una constante con el nombre "EventEmitter", lo mas recomendable
//es colocarle el nombre de "EventEmitter" para hacer referencia a la clase del modulo "events"
//pero puedes colocarle cualquier nombre
const EventEmitter = require('events')
const emisor = new EventEmitter();

//Declara un evento llamado "compra" y que haga lo que esta dentro de la funcion
emisor.on('compra', (total) =>{
    console.log(`Se hizo una compra ${total}`);
})

//Emite (Ejecuta) el evento llamado "compra" que declaraste con "on"
emisor.emit('compra', 10)



