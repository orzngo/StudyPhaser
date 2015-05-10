///<reference path="../../../../typings/node/node.d.ts" />
///<reference path="../../../../typings/phaser/phaser.d.ts" />

class Star extends Phaser.Image{

  private _speed = 0;

  constructor(private _game:Phaser.Game, bitmap:Phaser.BitmapData) {
    super(_game, 0, 0, bitmap, 0);
    this.resetStar();
  }

  public update() : void {
    this.x -= this._speed;
    if (this.x < -10) {
      this.resetStar();
    }
  }

  private _resetParams() : void {
    var scale = Math.random() * 3 + 1;
    this.scale.x = scale;
    this.scale.y = scale;
    this._speed = Math.random() * 10 + 1;
    this.angle = Math.random() * 360;
  }

  private _resetPosition(x:number = null, y:number = null) : void {
    if (!x) {
      this.x = this._game.width;
    } else {
      this.x = x;
    }

    if (!y) {
      this.y = Math.random() * (this._game.height -8);
    } else {
      this.y = y;
    }
  }

  public resetStar(x:number = null, y:number = null) : void {
    this._resetPosition(x, y);
    this._resetParams();
  }
}

export=Star;
