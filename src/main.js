let config = {
    type: Phaser.CANVAS,
    render: {
        pixelArt: true
    },
    width: 340,
    height: 320,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    zoom: 2,
    scene: [ Overworld ]
}

const game = new Phaser.Game(config);