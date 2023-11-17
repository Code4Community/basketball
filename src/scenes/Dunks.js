import Phaser from "phaser";
import Physics from "phaser";
import C4C from "c4c-lib";
import ant_dunk from "../assets/animations/ant_dunk.png"

export default class Dunks extends Phaser.Scene {

    preload() {
      this.load.spritesheet('ant_dunk', ant_dunk, { frameWidth: 500, frameHeight: 280 });
    }
  
    create() {
      this.ant_dunk = this.physics.add.sprite(1262/2, 346/2, 'ant_dunk');
      this.ant_dunk.setVisible(false);
  
      this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
  
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
  
    playAntDunk() {
      this.ant_dunk.setVisible(true);
      this.ant_dunk.play('anthony_dunk');
    }
  }