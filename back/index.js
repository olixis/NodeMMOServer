var restify = require('restify');
var server = restify.createServer();
var fs = require('fs');
// Loading the index file . html displayed to the client
// Loading socket.io
io = require('socket.io').listen(server.server);

// When a client connects, we note it in the console
io.on('connection', function(socket) {
    console.log('someone connected');
    var srvSockets = io.sockets.sockets;
    socket.emit('connected', {socketsNum:Object.keys(srvSockets),id:socket.id});
    socket.broadcast.emit('connection', {socketsNum:Object.keys(srvSockets),id:socket.id});
    socket.on('disconnect', function() {
         io.sockets.emit('playerLeft', {socketsNum:Object.keys(srvSockets),id:socket.id});
    }); 
    socket.on('movement', function(data) {
         io.sockets.emit('movement', {posX:data.posX,posY:data.posY,id:socket.id});
    });
    console.log(socket.id);
});
server.listen(3000, function() {
    console.log('listening');
});