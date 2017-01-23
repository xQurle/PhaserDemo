var demo = {}, centerX = 1500 / 2, centerY = 1000 / 2, adam, speed = 7;
demo.state0 = function(){};
demo.state0.prototype = {
    preload: function(){
        game.load.spritesheet('adam', 'assets/spritesheets/adamSheet.png', 250, 250);
        game.load.image('mountains', 'assets/backgrounds/mountainsBG.png');
    },
    create: function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = '#66ffcc';       
        addChangeStateEventListeners();
        game.world.setBounds(0, 0, 2667, 1000);
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;        
        var mountainsBG = game.add.sprite(0, 0, 'mountains');        
        adam = game.add.sprite(centerX, centerY, 'adam');
        adam.anchor.setTo(0.5, 0.5);
        adam.scale.setTo(0.9, 0.9);
        game.physics.enable(adam);
        adam.body.collideWorldBounds = true;
        adam.animations.add('walk', [0, 2]);
        
        game.camera.follow(adam);
        game.camera.deadzone = new Phaser.Rectangle(centerX - 300, 0, 600, 1000);
        
    },
    update: function(){
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            adam.scale.setTo(0.9, 0.9);
            adam.x += speed;
            adam.animations.play('walk', 8, true);
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            adam.scale.setTo(-0.9, 0.9);
            adam.x -= speed;
            adam.animations.play('walk', 8, true);
        }
        else {
            adam.animations.stop('walk');
            adam.frame = 0;
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
            if(adam.y < 584){
                adam.y = 584;
            }
            adam.y -= speed;
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
            adam.y += speed;
        }
    }
};

function changeState(i, stateNum) {
    console.log('state' + stateNum);
    game.state.start('state' + stateNum);
}

function addKeyCallback(key, fn, args) {
    game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
}

function addChangeStateEventListeners() {
    addKeyCallback(Phaser.Keyboard.ZERO, changeState, 0);
    addKeyCallback(Phaser.Keyboard.ONE, changeState, 1);
    addKeyCallback(Phaser.Keyboard.TWO, changeState, 2);
    addKeyCallback(Phaser.Keyboard.THREE, changeState, 3);
    addKeyCallback(Phaser.Keyboard.FOUR, changeState, 4);
    addKeyCallback(Phaser.Keyboard.FIVE, changeState, 5);
    addKeyCallback(Phaser.Keyboard.SIX, changeState, 6);
    addKeyCallback(Phaser.Keyboard.SEVEN, changeState, 7);
    addKeyCallback(Phaser.Keyboard.EIGHT, changeState, 8);
    addKeyCallback(Phaser.Keyboard.NINE, changeState, 9);
}