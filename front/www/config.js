require.config({
    baseUrl: 'js/',
    paths: {
        phaser: '../lib/phaser.min',
        socketio: '../lib/socket.io.min'
    },
    shim: {
        'phaser': {
            exports: 'Phaser'
        }
    }
});

requirejs(['game']);