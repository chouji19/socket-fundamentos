const { io } = require('../server')
io.on('connection', (client) => {
    console.log('Usuario Conectado ');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta App'
    })
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //escuchar mensaje
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        // if (mensaje.usuario)
        //     callback({ respuesta: 'Todo salio bien' });
        // else
        //     callback({ respuesta: 'Todo salio mal' });
        client.broadcast.emit('enviarMensaje', data)

    })
})