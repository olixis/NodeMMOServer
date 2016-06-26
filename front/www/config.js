require.config({
    baseUrl: 'js/',
    paths: {
        phaser: '../lib/phaser.min'
    },
    shim: {
        'phaser': {
            exports: 'Phaser'
        }
    }
});

requirejs(['game']);