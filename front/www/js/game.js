
define(['phaser','boot'], function(Phaser, Boot){
	'use strict';
var game = new Phaser.Game(1280, 960, Phaser.AUTO, 'game');

//game.socket = socket;
//game.io = io;


game.forceSingleUpdate = true;

game.state.add('boot',Boot);


game.state.start('boot');

});





