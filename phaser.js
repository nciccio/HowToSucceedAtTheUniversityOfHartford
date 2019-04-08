var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    margin-left: 100px,
    physics: {
        default: 'arcade',
        arcade: {
            //gravity: { y: 0 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var cursors;
function preload()
{
    this.load.image('background', 'tilesSet.PNG');
    this.load.spritesheet('student', 'real_student.png', {frameWidth: 51, frameHeight: 99 });
    this.load.image('desk', 'newdesk4.PNG');
    this.load.image('paper', 'loose-leaf-paper3.png');
}

function create()
{
    this.add.image(400, 300, 'background');
    desks = this.physics.add.staticGroup();
    desks.create(200, 150, 'desk');
    desks.create(700, 450, 'desk');
    desks.create(700, 150, 'desk');
    desks.create(200, 450, 'desk');
    player = this.physics.add.sprite(100, 450, 'student');
    player.setCollideWorldBounds(true);
    
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('student', {start:6, end:7}),
        frameRate: 5,
        repeat: -1
    });
    
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('student', {start: 3, end: 5}),
        frameRate: 5,
        repeat: -1
    });
    
    this.anims.create({
        key: 'up',
        frames: this.anims.generateFrameNumbers('student', {start: 3, end: 5}),
        frameRate: 5,
        repeat: -1
    });
    
    this.anims.create({
        key: 'down',
        frames: this.anims.generateFrameNumbers('student', {start: 4, end: 5}),
        frameRate: 5,
        repeat: -1
    });
    
    this.anims.create({
        key: 'still',
        frames: this.anims.generateFrameNumbers('student', {start: 8, end: 8}),
        frameRate: 5,
        repeat: -1
    });
    
    this.physics.add.collider(player, desks);
    cursors = this.input.keyboard.createCursorKeys();
}

function update()
{   
//Left and right movement
    player.setVelocityX(0);
     player.setVelocityY(0);
    if (cursors.left.isDown)
    {
        player.setVelocityX(-220);
        player.anims.play('left', true);
    }
  else if (cursors.right.isDown)
  {
      player.setVelocityX(220);
      player.anims.play('right', true);
  }
//
//Up and down momement  
  else if (cursors.up.isDown) {
     player.setVelocityY(-220);
     player.anims.play('up', true);
  } 
    else if (cursors.down.isDown) {
        player.setVelocityY(220);
          player.anims.play('down', true);
   }
    
    else{
        player.anims.play('left', false);
        player.anims.play('right', false);
        player.anims.play('up', false);
        player.anims.play('down', false);
        player.anims.play('still', true);
    }
}

/*
// var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });
var game = new Phaser.Game(320, 241, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {

    game.load.image('dragon', 'assets/pics/cougar_dragonsun.png');
    game.load.image('star', 'assets/pics/monika_krawinkel-amberstar_title.png');
    game.load.image('nanoha', 'assets/pics/nanoha_taiken_pink.png');

}

function create() {

    // game.add.image(0, 0, 'star');

    var i = game.add.image(game.world.centerX, game.world.centerY, 'nanoha');
    i.anchor.set(0.5);

    // var sprite = game.add.sprite(game.world.centerX, game.world.centerY, 'dragon');
    // sprite.anchor.set(0.5);

    game.stage.backgroundColor = '#4d4d4d';

    // Stretch to fill
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;

    // Keep original size
    // game.scale.fullScreenScaleMode = Phaser.ScaleManager.NO_SCALE;

    // Maintain aspect ratio
    // game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;

    game.input.onDown.add(gofull, this);

}

function gofull() {

    if (game.scale.isFullScreen)
    {
        game.scale.stopFullScreen();
    }
    else
    {
        game.scale.startFullScreen(false);
    }

}

function update() {

}

function render () {

    // game.debug.text('Click / Tap to go fullscreen', 270, 16);
    // game.debug.text('Click / Tap to go fullscreen', 0, 16);

    game.debug.inputInfo(32, 32);
    // game.debug.pointer(game.input.activePointer);

}
*/
