import Phaser from "phaser";
import Physics from "phaser";
import logoImg from "../assets/logo.png";
import smileyImg from "../assets/smiley.png";
import court from "../assets/court.png";
import derrick from "../assets/derrick_rose.jpg";
import enemy from "../assets/defender.png";
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
    this.load.image('enemy', enemy);
  }

  create() {

    this.add.image(0, 0,'court').setOrigin(0,0);
    //this.add.image(0,0,'playa');
    var player = this.physics.add.sprite(0, 0, 'playa').setOrigin(0,0);
    var enemy = this.physics.add.sprite(200, 0, 'enemy').setOrigin(0,0);
    //this.physics.moveTo(player, player.x - 300, player.y - 300, 50)
    player.setScale(.1);
    enemy.setScale(1);

    let enemies = this.physics.add.group({
      setScale: {x: .2, y: .2},
      key: 'enemy',
      repeat: 2,
      setXY: {x: 850, y: 100, stepY: 85},
    })

    //enemies.children.iterate(function (child) {
       //this.physics.moveTo(child, child.x - 300, child.y - 300, 150)
       //child.setVisible(false);
    //});

    //add to array seperately?
    
    this.tweens.add({
      targets: enemies.getChildren(),
      y: '+=90',
      duration: 1200
  });





  }

  update() {
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