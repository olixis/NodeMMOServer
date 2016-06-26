define(['phaser'], function(Phaser){
    'use strict';

function Boot(game) {}
Boot.prototype.constructor = Boot;
Boot.prototype.init = function() {
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
};
Boot.prototype.preload = function() {
    //  Here we load the assets required for our preloader (in this case a background and a loading bar)
    this.game.load.image('ground', '../assets/ground_1x1.png');
};
Boot.prototype.create = function() {
    this.Gatherables = this.game.add.group();
    var ground = this.Gatherables.create(1, 1, 'ground');
    ground.inputEnabled = true;
    ground.events.onInputDown.add(this.pickTile, this);
    //--------------------------------------------------------------
    this.game.stage.backgroundColor = '#2d2d2d';
    this.marker = this.game.add.graphics();
    this.marker.lineStyle(2, 0x000000, 1);
    this.marker.drawRect(0, 0, 32, 32);
    this.game.input.addMoveCallback(this.updateMarker, this);
    this.game.input.onDown.add(this.createObjects, this);
};
Boot.prototype.updateMarker = function() {
    this.marker.x = this.game.math.snapToFloor(this.game.input.activePointer.worldX, 32);
    this.marker.y = this.game.math.snapToFloor(this.game.input.activePointer.worldY, 32);
};
Boot.prototype.pickTile = function(sprite, pointer) {
    this.lastPick = sprite;
};
Boot.prototype.createObjects = function(sprite, pointer) {
    if (this.lastPick) {
        console.log(this.lastPick);
        this.Gatherables.create(this.marker.x,this.marker.y, this.lastPick.key);
    }
};

return Boot;

});

