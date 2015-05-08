///<reference path="../../../../typings/node/node.d.ts" />
///<reference path="../../../../typings/phaser/phaser.d.ts" />


class GameState extends Phaser.State {
  static NAME = "MainGame";

  public update() : void {
    console.log("gamestate");
  }

}

export=GameState;
