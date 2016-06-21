var BasicGame = {};
BasicGame.Boot = function(game) {};
BasicGame.Boot.prototype = {
    init: function() {
        game.socket.on('room',function(room){
            game.socket.room = room;
        });
        game.socket.on('teste',function(pos){
            console.log('entrou pos client side');
            barraP2.y = pos;
        });
        //  Unless you specifically know your game needs to support multi-touch I would recommend setting this to 1
        this.input.maxPointers = 1;
        //  Phaser will automatically pause if the browser tab the game is in loses focus. You can disable that here:
        this.stage.disableVisibilityChange = true;
        if (this.game.device.desktop) {
            //  If you have any desktop specific settings, they can go in here
            this.scale.pageAlignHorizontally = true;
        } else {
            //  Same goes for mobile settings.
            //  In this case we're saying "scale the game, no lower than 480x260 and no higher than 1024x768"
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.setMinMax(480, 260, 1024, 768);
            this.scale.forceLandscape = true;
            this.scale.pageAlignHorizontally = true;
        }
    },
    preload: function() {
        //  Here we load the assets required for our preloader (in this case a background and a loading bar)
        game.load.image('bola', 'bola.png');
        game.load.image('barra', 'barra.png');
        // this.load.image('preloaderBar', 'images/preloadr_bar.png');
    },
    create: function() {
        bola = game.add.sprite(game.world.centerX, 360, 'bola');
        move = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        move.onDown.add(function() {
            barraP1.y -= 10;
        }, this);
        move.onUp.add(function() {
            socket.emit('pos',{pos:barraP1.y,room:game.socket.room});
        }, this);
        bola.anchor.setTo(0.5);
        barraP1 = game.add.sprite(20, 360, 'barra');
        barraP1.anchor.setTo(0.5);
        barraP2 = game.add.sprite(1260, 360, 'barra');
        barraP2.anchor.setTo(0.5);
    }
};