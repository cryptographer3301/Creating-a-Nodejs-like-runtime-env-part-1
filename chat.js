const net = require('.net');

const sockets = []; // empty array to collect users .

const HTTP = net.Server(function(socket,  ...args) {
    sockets.push(socket);

    socket.on('data', function(message){
        for (var i = 0; i <= sockets.length; i++){
            sockets[i].write(message);
        }
    });

    socket.on('end', function() {
        let i = sockets.indexOf(socket);
        sockets.splice(i, 1);
    });
});

HTTP.listen(8000);
