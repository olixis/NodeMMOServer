function TickServer(){}

TickServer.prototype.constructor = TickServer;

TickServer.prototype.init = function(io){
	setInterval(function(){io.to('server1').emit('tick')},1000);
};




module.exports = new TickServer();