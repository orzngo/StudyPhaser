///<reference path="../../../../typings/node/node.d.ts" />
///<reference path="../../../../typings/phaser/phaser.d.ts" />

import Star = require("../star/Star");

class GameState extends Phaser.State {
  static NAME = "MainGame";

  private _stars:Star[];

  public create() : void {
    this._createStar();
  }

  public update() : void {
  }



  private _createStar() : void {
    var bmd = this.game.add.bitmapData(1, 1);
    bmd.ctx.beginPath();
    bmd.ctx.rect(0,0,1,1);
    bmd.ctx.fillStyle = '#ffffff';
    bmd.ctx.fill();

    this._stars = [];

    for (var i=0; i < 20; i++) {
      var star = new Star(this.game, bmd);
      this._stars.push(star);
      star.tint = Math.random() * 0xffffff;
      star.resetStar(Math.random() * this.game.width, Math.random() * this.game.height);

      this.game.world.add(star);
    }
  }

}

export=GameState;
