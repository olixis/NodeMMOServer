var restify = require('restify');
var server = restify.createServer();
var fs = require('fs');
// Loading the index file . html displayed to the client
// Loading socket.io
io = require('socket.io').listen(server.server);

// When a client connects, we note it in the console
io.on('connection', function(socket) {
    console.log('someone connected');
    console.log(socket.id);
});
server.listen(3000, function() {
    console.log('listening');
});