var restify = require('restify');
var server = restify.createServer();
var fs = require('fs');
// Loading the index file . html displayed to the client
// Loading socket.io
io = require('socket.io').listen(server.server);

// When a client connects, we note it in the console
var tickServer = require('./TickServer');
tickServer.init(io);
io.on('connection', function(socket) {
    console.log('someone connected');
    console.log(socket.id);
    socket.on('logar',function(){
    	socket.join('server1');
    });
});


server.listen(3000, function() {
    console.log('listening');
});