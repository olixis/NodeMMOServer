
define(['phaser','boot','socketio'], function(Phaser, Boot, io){
	'use strict';
var game = new Phaser.Game(1280, 960, Phaser.AUTO, 'game');

game.forceSingleUpdate = true;

game.state.add('boot',Boot);


game.state.start('boot');

});





