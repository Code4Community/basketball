import Phaser from "phaser";
import Physics from "phaser";
import logoImg from "../assets/logo.png";
import smileyImg from "../assets/smiley.png";
import court from "../assets/court.png";
import derrick from "../assets/derrick_rose.jpg";
import curry from "../assets/curry.jpg";
import C4C from "c4c-lib";


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
    this.load.image('enemy', curry);
  }

  create() {

    this.add.image(0, 0,'court').setOrigin(0,0);
    //this.add.image(0,0,'playa');
    var player = this.physics.add.sprite(0, 0, 'playa').setOrigin(0,0);
    player.setScale(0.1);

  }
}
//defender use group on tutorial same sprite use place holder.


class CourtBoundaries {

  title_increment;
  full_X_border;
  full_Y_border;
  court_offset_X;
  court_offset_Y;
  court_border_X;
  court_border_Y;

  constructor(posX, posY) { //posX posY added for unrestricted placement of court
      this.title_increment = 49;
      this.full_X_border = 1262 + posX;
      this.full_Y_border = 346 + posY;
      this.court_offset_X = 175;
      this.court_offset_Y = 90;
      this.court_border_X = this.full_X_border - 2 * this.court_offset_X;
      this.court_border_Y = this.full_Y_border - 2 * this.court_offset_Y;
  }

  checkCollision(posX, posY){
    let flag = false;
    return 
  }
}