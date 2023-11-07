import Phaser from "phaser";
import Physics from "phaser";
import logoImg from "../assets/logo.png";
import smileyImg from "../assets/smiley.png";
import court from "../assets/court.png";
import derrick from "../assets/derrick_rose.jpg";
import ballz from "../assets/Basketball.png";
import C4C from "c4c-lib";


var ball;
var player;
var cursors;

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
    this.load.image('playa', derrick);
    this.load.image('ballz', ball);
  }

  create() {

    this.add.image(0, 0, 'court').setOrigin(0,0);
    player = this.physics.add.sprite(1, 10, 'playa').setOrigin(0,0);
    player.setScale(0.1);

    ball = this.physics.add.sprite(500, 10, 'ballz').setOrigin(0,0);
    ball.setScale(.1);

    cursors = this.input.keyboard.createCursorKeys();

  }

  update() {

    if (cursors.isDown(Phaser.KeyCode.SPACEBAR)) {

      passBall();

    }

  }
  
  passBall(){

    this.physics.moveToObject(ball, player);
  
  }

  
}


