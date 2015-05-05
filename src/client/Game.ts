///<reference path="../../typings/node/node.d.ts" />
///<reference path="../../typings/phaser/phaser.d.ts" />

class Game {
  private _game:Phaser.Game; 

  constructor() {
    this._game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', {});
  }

}

export=Game;
