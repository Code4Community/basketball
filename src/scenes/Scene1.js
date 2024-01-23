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
    this.load.image('enemy', enemy);
  }

  create() {
    this.myCourt = new Court(0, 0);
    this.add.image(0, 0, 'court').setOrigin(0,0);
    this.player = this.physics.add.sprite(0, 50, 'derrick').setOrigin(0,0);
    this.player.setScale(0.05);
    let enemy = this.physics.add.sprite(200, 0, 'enemy').setOrigin(0,0);
    enemy.setScale(.5);
    
    // Creating enemies group
    let enemies = this.physics.add.group({
      setScale: {x: .2, y: .2},
      key: 'enemy',
      repeat: 2,
      setXY: {x: 850, y: 100, stepY: 85},
    })

    this.physics.add.enemies;

     

    //enemies.children.iterate(function (child) {
       //this.physics.moveTo(child, child.x - 300, child.y - 300, 150)
       //child.setVisible(false);
    //});

    //add to array seperately?

    /*const tween = this.tweens.add({
      targets: enemies.getChildren(),
      x: "+=90",
      duration: 1200,
      yoyo: true,
      repeat: -1,
    });*/

    

    // Creating keys for placeholder to call move functions
    this.keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    this.keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    this.keyUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

    // Placeholders to call move functions
    this.keyLeft.on('down', (key, event) => {
        this.moveLeft(this.player);
    });
    this.keyRight.on('down', (key, event) => {
      this.moveRight(this.player);
    });
    this.keyUp.on('down', (key, event) => {
      this.moveForward(this.player);
    });
    this.physics.world.enable(this.player);
    this.player.body.colliderWorldBounds = true;
    this.physics.add.collider(enemies, this.player, this.turnover);

  }
  
  turnover() {
    console.log("Collided");
  }

  update() {
    
    // Ensures player only moves as far as we want
    if (this.player.body.speed > 0)
    {
        if (this.player.x >= this.posX + this.myCourt.tile_increment)
        {
            this.player.setVelocity(0, 0);
        }
    }

  }

  // Our move functions for the player
  moveLeft(player) {
    this.posX = this.player.x;
    this.physics.moveTo(player, player.x + this.myCourt.tile_increment, player.y - this.myCourt.tile_increment, 200);
  }

  moveRight(player) {
    this.posX = this.player.x;
    this.physics.moveTo(player, player.x + this.myCourt.tile_increment, player.y + this.myCourt.tile_increment, 200);
  }

  moveForward(player) {
    this.posX = this.player.x;
    this.physics.moveTo(player, player.x + this.myCourt.tile_increment, player.y, 200);
  }
}
//defender use group on tutorial same sprite use place holder.


class Court {

  static tile_increment;
  static full_X_border;
  static full_Y_border;
  static court_offset_X;
  static court_offset_Y;
  static court_border_X;
  static court_border_Y;

  constructor(posX, posY) { //posX posY added for unrestricted placement of court
      this.tile_increment = 49;
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