///<reference path="../../../../typings/node/node.d.ts" />
///<reference path="../../../../typings/phaser/phaser.d.ts" />

import GameState = require("./GameState");

class TitleState extends Phaser.State {
  static NAME = "Title";

  public preload():void {
    this.load.spritesheet("char", require("../../../assets/img/char.png"), 32, 32);
    this.load.spritesheet("myShot", require("../../../assets/img/shot01.png"), 16, 16);
    this.load.spritesheet("explode", require("../../../assets/img/exp.png"), 32, 32);
  }

  public create():void {
    this.game.state.start(GameState.NAME);
  }

  public update():void {
  }

}

export=TitleState;
