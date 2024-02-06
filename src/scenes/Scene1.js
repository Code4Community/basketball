import Phaser from "phaser";
import Physics from "phaser";
import logoImg from "../assets/logo.png";
import smileyImg from "../assets/smiley.png";
import court from "../assets/court.png";
import derrick from "../assets/derrick_rose.jpg";
import ballz from "../assets/Basketball.png";
import enemy from "../assets/defender.png";
import C4C from "c4c-lib";

let deltaX = 50;
let deltaY = 50;

let basketX = 100;
let basketY = 55;

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
    this.load.image('ballz', ballz)
  }

  create() {
    this.myCourt = new Court(0, 0);
    this.add.image(0, 0, 'court').setOrigin(0,0);
    this.player = this.physics.add.sprite(100, 100, 'derrick').setOrigin(0,0);

    this.player.setScale(.05);
    let enemy = this.physics.add.sprite(600, 200, 'enemy').setOrigin(0,0);

    this.ball = this.physics.add.sprite(10, 50, "ballz").setOrigin(0,0);
    this.ball.setScale(.05)
    enemy.setScale(.2);

// Creating three separate enemies
    let enemy1 = this.physics.add.sprite(600, 200, 'enemy').setOrigin(0,0);
    enemy1.setScale(.2, .2);

    let enemy2 = this.physics.add.sprite(600, 200, 'enemy').setOrigin(0,0);
    enemy2.setScale(.2, .2);

    let enemy3 = this.physics.add.sprite(600, 200, 'enemy').setOrigin(0,0);
    enemy3.setScale(.2, .2);

// Movement pattern for enemy1 (e.g., vertical movement)
    this.tweens.add({
      targets: enemy1,
      y: '+=90',
      duration: 1000,
      yoyo: true,
      repeat: -1
    });

// Movement pattern for enemy2 (e.g., horizontal movement)
    this.tweens.add({
      targets: enemy2,
      x: '+=100',
      duration: 1500,
      yoyo: true,
      repeat: -1
    });

// Complex movement pattern for enemy3 (e.g., diagonal movement)
    this.tweens.add({
      targets: enemy3,
      x: '+=120',
      y: '+=120',
      duration: 2000,
      yoyo: true,
      repeat: -1
    });

    // Creating keys for placeholder to call move functions
    this.keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    this.keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    this.keyUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);


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

    this.spacebar.on("down", (key, event) =>
    {
      this.passBall(this.player);
    })

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

    if (this.physics.collide(this.player, this.ball)) {
      this.ball.setVelocity(0,0);
      this.player.setVelocity(0, 0);
      this.ball.setVisible(false);
    }

    // if (this.physics.collide(this.player, this.ball)) {
    //   this.ball.setVelocity(0,0);
    //   this.player.setVelocity(0, 0);
    //   this.ball.setVisible(false);
    // }

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

  passBall(/*player1, */player2) {
    this.ball.setVisible(true);
    //this.ball.x = player1.x;
    //this.ball.y = player.y;
    this.physics.moveToObject(this.ball, player2);
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