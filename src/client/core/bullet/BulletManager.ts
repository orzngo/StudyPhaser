///<reference path="../../../../typings/node/node.d.ts" />
///<reference path="../../../../typings/phaser/phaser.d.ts" />

/**
 * 自機の弾発射をコントロールするクラス
 */
class BulletManager {
  private _shotTime:number = 0;
  private _level:number = 5;

  private _shotRotateDeg:number[] = [ 0, -10, 10, -20, 20];

  constructor(private _group:Phaser.Group, private _max:number = 30) {
    //TODO:この辺弾自身を作っているので、MyBulletみたいなクラスに移管
    _group.enableBody = true;
    _group.physicsBodyType = Phaser.Physics.ARCADE;
    _group.createMultiple(30, 'myShot');
    _group.setAll("anchor.x", 0);
    _group.setAll("anchor.y", 0.5);
    _group.callAll("animations.add", "animations", 'default');
    _group.callAll("animations.play", "animations", 'default', 10, true);
    _group.setAll("outOfBoundsKill", true);
    _group.setAll("checkWorldBounds", true);
  }

  public shot(x:number, y:number) : void {
    var now = this._group.game.time.now;

    if (now < this._shotTime) {
      return;
    }

    var bullets:Phaser.Sprite[] = [];

    for (var i = 1; i <= this._level; i++) {
      var bullet = this._group.getFirstExists(false);
      if (!bullet) {
        break;
      }
      bullet.reset();
      bullets.push(bullet);
    }

    if (bullets.length < this._level) {
      for (var key in bullets) {
        bullets[key].kill();
      }
      return;
    }

    var rotateIndex = 0;
    for (var key in bullets) {
      var targetBullet = bullets[key];
      targetBullet.angle = this._shotRotateDeg[rotateIndex];
      targetBullet.reset(x + 8, y);
      this._group.game.physics.arcade.velocityFromAngle(targetBullet.angle, 700, targetBullet.body.velocity);

      rotateIndex++;
    }

    this._shotTime = now + 120;

  }

  public set level(val:number) {
    this._level = val;
  }
  public get level() : number {
    return this._level;
  }

}

export=BulletManager;
