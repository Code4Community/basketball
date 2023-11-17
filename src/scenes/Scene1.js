import Phaser from "phaser";
import Physics from "phaser";
import logoImg from "../assets/logo.png";
import smileyImg from "../assets/smiley.png";
import court from "../assets/court.png";
import derrick from "../assets/derrick_rose.jpg";
import ant_dunk from "../assets/animations/ant_dunk.png"
import C4C from "c4c-lib";

let deltaX = 50;
let deltaY = 50;

function enterButtonHoverState(btn) {
  btn.setStyle({ fill: "#ff0" });
}

function enterButtonRestState(btn) {
  btn.setStyle({ fill: "#fff" });
}

export default class Scene1 extends Phaser.Scene {
  constructor() {
    super("Example");
  }

  preload() {
    this.load.image("logo", logoImg);
    this.load.image("smiley", smileyImg);
    this.load.image('court', court);
    this.load.image('derrick', derrick);

    this.load.spritesheet('ant_dunk', ant_dunk, { frameWidth: 500, frameHeight: 280 });
  }

  create() {
    this.add.image(0, 0, 'court').setOrigin(0,0);
    this.player = this.physics.add.sprite(0, 50, 'derrick').setOrigin(0,0);
    this.player.setScale(0.05);

    this.ant_dunk = this.physics.add.sprite(1262/2, 346/2, 'ant_dunk');
    this.ant_dunk.setVisible(false);

    // Used for placeholder move functions
    this.keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    this.keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    this.keyUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);


    // Placeholders to call move functions
    this.keyLeft.on('down', (key, event) => {
      this.posX = this.player.x;
        this.moveLeft(this.player);
    });
    this.keyRight.on('down', (key, event) => {
      this.posX = this.player.x;
      this.moveRight(this.player);
    });
    this.keyUp.on('down', (key, event) => {
      this.posX = this.player.x;
      this.moveForward(this.player);
    });
    
    this.keyD.on('down', (key, event) => {
      this.playAntDunk()
    });

    this.anims.create({
      key: 'anthony_dunk',
      frames: this.anims.generateFrameNumbers('ant_dunk', { frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
                                                                    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                                                                    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                                                                    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
                                                                    41, 42, 43, 44, 45, 46, 47, 48, 49] }),
      frameRate: 20,
      repeat: 0
    });

  }

  update() {

    // Ensures player only moves as far as we want
    if (this.player.body.speed > 0)
    {
        if (this.player.x >= this.posX + deltaX)
        {
            this.player.setVelocity(0, 0);
        }
    }
  }

  // Our move functions for the player
  moveLeft(player) {
    this.physics.moveTo(player, player.x + deltaX, player.y - deltaY, 200);
  }

  moveRight(player) {
    this.physics.moveTo(player, player.x + deltaX, player.y + deltaY, 200);
  }

  moveForward(player) {
    this.physics.moveTo(player, player.x + deltaX, player.y, 200);
  }

  playAntDunk() {
    this.ant_dunk.setVisible(true);
    this.ant_dunk.play('anthony_dunk');
  }
}
