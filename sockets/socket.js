const {io} = require('../index');

//Sockets
io.on('connection', client => {
    console.log('Connected client');

    client.on('disconnect', () => {
        console.log('Desconnected client');
    });

    client.on('message', ( payload ) => {
        console.log('Mensaje', payload);

        io.emit('message', {admin: 'new message'});
    });
});
