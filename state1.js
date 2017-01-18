demo.state1 = function(){};

var cursors, vel = 500, rocks, grass;

demo.state1.prototype = {
    preload: function(){
        game.load.tilemap('field', 'assets/tilemaps/field.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.image('grassTiles', 'assets/tilemaps/grassTiles.png');
        game.load.image('rockTiles', 'assets/tilemaps/rockTiles.png');
        game.load.image('angelino', 'assets/sprites/angelino.png');
    },
    create: function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = '#00cc99';
        addChangeStateEventListeners();
        
        var map = game.add.tilemap('field');
        map.addTilesetImage('grassTiles');
        map.addTilesetImage('rockTiles');
        
        grass = map.createLayer('grass');
        rocks = map.createLayer('rocks');
        
        map.setCollisionBetween(3, 11, true, 'rocks');
        map.setCollision(2, true, 'grass');
        
        angelino = game.add.sprite(200, 200, 'angelino');
        angelino.scale.setTo(0.2, 0.2);
        game.physics.enable(angelino);
        
        cursors = game.input.keyboard.createCursorKeys();
    },
    update: function(){
        game.physics.arcade.collide(angelino, rocks);
        game.physics.arcade.collide(angelino, grass);
        
        if(cursors.up.isDown){
            angelino.body.velocity.y = -vel;
        }
        else if(cursors.down.isDown){
            angelino.body.velocity.y = vel;
        }
        else {
            angelino.body.velocity.y = 0;
        }
        if(cursors.left.isDown){
            angelino.body.velocity.x = -vel;
        }
        else if(cursors.right.isDown){
            angelino.body.velocity.x = vel;
        }
        else {
            angelino.body.velocity.x = 0;
        }
    }
};