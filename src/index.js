import Phaser from "phaser";
import C4C from "c4c-lib";
import ExampleScene from "./scenes/ExampleScene";
import Scene1 from "./scenes/Scene1";
import Dunks from "./scenes/Dunks";

// You can define a custom theme here and pass it into .create below
const theme = {
  "&": {
    color: "red",
    backgroundColor: "gray",
  },
  ".cm-content, .cm-gutter": {
    minHeight: "600px",
  },
}

C4C.Editor.create(document.body, null, true);

var config = { 
  parent: "container",
  type: Phaser.AUTO,
  width: 1262,
  height: 346,
  physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 0 },
        debug: false
    }
  },
  dom: {
    createContainer: true,
  },
  scene: [Scene1, Dunks],
};

const game = new Phaser.Game(config);
