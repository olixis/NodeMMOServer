
window.game = new Phaser.Game(1280, 720, Phaser.AUTO, 'game');

game.socket = socket;
game.io = io;


game.forceSingleUpdate = true;

game.state.add('boot',BasicGame.Boot);


game.state.start('boot');


