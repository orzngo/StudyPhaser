///<reference path="../../../../typings/node/node.d.ts" />
///<reference path="../../../../typings/phaser/phaser.d.ts" />

import Star = require("../star/Star");
import BulletManager = require("../bullet/BulletManager");

class GameState extends Phaser.State {
  static NAME = "MainGame";

  private _stars:Star[];
  private _myShip:Phaser.Sprite;
  private _bulletManager:BulletManager;
  private _fireButton:Phaser.Key;
  private _keys:Phaser.CursorKeys;

  public create() : void {
    this._createStar();
    this._createShip();
    this._bulletManager = new BulletManager(this.game.add.group());

    this._keys = this.game.input.keyboard.createCursorKeys();
    this._fireButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    
  }

  public update() : void {
    this._myShip.body.velocity.setTo(0, 0);

    if (this._keys.left.isDown) {
      this._myShip.body.velocity.x = -200;
    } else if (this._keys.right.isDown) {
      this._myShip.body.velocity.x = 200;
    }
    if (this._keys.up.isDown) {
      this._myShip.body.velocity.y = -200;
    } else if (this._keys.down.isDown) {
      this._myShip.body.velocity.y = 200;
    }

    if (this._fireButton.isDown) {
      this._bulletManager.shot(this._myShip.x, this._myShip.y);
    }

  }


  private _createShip() : void {
    this._myShip = this.game.add.sprite(50, this.game.height / 2, 'char');
    this.game.physics.enable(this._myShip, Phaser.Physics.ARCADE);

    this._myShip.animations.add('default');
    this._myShip.animations.play('default', 10, true);
    this._myShip.anchor.setTo(0.5, 0.5);

    this._myShip.body.collideWorldBounds = true;
    

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
