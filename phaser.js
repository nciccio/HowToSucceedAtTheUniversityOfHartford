var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
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
    this.load.spritesheet('student', 'real_student.png', {frameWidth: 57, frameHeight: 99 });
}

function create()
{
    this.add.image(400, 300, 'background');
    
    player = this.physics.add.sprite(100, 450, 'student');
    player.setCollideWorldBounds(true);
    
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('student', {start:1, end:5}),
        frameRate: 10,
        repeat: -1
    });
    
    this.anims.create({
        key: 'turn',
        frames: [ {key: 'student', frame: 4 } ],
        frameRate: 20
    });
    
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('student', {start: 9, end: 12}),
        frameRate: 10,
        repeat: -1
    });
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
  if (cursors.right.isDown)
  {
      player.setVelocityX(220);
      player.anims.play('right', true);
  }
//
//Up and down momement  
  if (cursors.up.isDown) {
     player.setVelocityY(-220);
     player.anims.play('up', true);
  } 
    if (cursors.down.isDown) {
        player.setVelocityY(220);
          player.anims.play('down', true);
   }
//   
   /* else
    {
        player.setVelocityX(0);
        player.anims.play('turn');
    }
*/

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
