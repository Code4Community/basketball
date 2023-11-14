import Phaser from "phaser";
import Physics from "phaser";
import logoImg from "../assets/logo.png";
import smileyImg from "../assets/smiley.png";
import court from "../assets/court.png";
import derrick from "../assets/derrick_rose.jpg";
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
  }

  create() {
    this.add.image(0, 0, 'court').setOrigin(0,0);
    this.player = this.physics.add.sprite(0, 50, 'derrick').setOrigin(0,0);
    this.player.setScale(0.05);

    // Used for placeholder move functions
    this.keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    this.keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    this.keyUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

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
}
