import Phaser from "phaser";
import Physics from "phaser";
import logoImg from "../assets/logo.png";
import smileyImg from "../assets/smiley.png";
import court from "../assets/court.png";
import derrick from "../assets/derrick_rose.jpg";
import enemy from "../assets/defender.png";
import C4C from "c4c-lib";

let deltaX = 50;
let deltaY = 50;

export default class Scene1 extends Phaser.Scene {
  constructor () {
      super({ key: 'Scene1', active: true });
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
    let enemy = this.physics.add.sprite(200, 0, 'enemy').setOrigin(0,0);
    enemy.setScale(1);
    
    // Creating enemies group
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
    
    // tween for enemies movement
    this.tweens.add({
      targets: enemies.getChildren(),
      y: '+=90',
      duration: 1200
    });

    // Creating keys for placeholder to call move functions
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
    this.add.image(0, 0, 'court').setOrigin(0,0);
    //var player = this.physics.add.sprite(0, 0, 'playa').setOrigin(0,0);
    //player.setScale(0.1);
    
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