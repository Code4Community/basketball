import Phaser from "phaser";
import Physics from "phaser";
import logoImg from "../assets/logo.png";
import smileyImg from "../assets/smiley.png";
import court from "../assets/court.png";
import derrick from "../assets/derrick_rose.jpg";
import C4C from "c4c-lib";

let deltaX = 100;
let deltaY = 100;

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
    var player = this.physics.add.sprite(0, 50, 'derrick').setOrigin(0,0);
    player.setScale(0.05);

    this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    this.keySpace.on('down', (key, event) =>
    {
        this.physics.moveTo(player, player.x + deltaX, player.y - deltaY, 200);
    });

  }
}
