///<reference path="../../../../typings/node/node.d.ts" />
///<reference path="../../../../typings/phaser/phaser.d.ts" />

import MotionStatus = require("../motion/MotionStatus");

class MotionObject extends Phaser.Sprite{
  private _motionStatus: MotionStatus;
  private _useAngle: boolean;

  public initialize (status: MotionStatus, useAngle:boolean = false) {
    this._motionStatus = status;
    this._useAngle = useAngle;
  }

  public reset(x:number, y:number, health:number = 0): Phaser.Sprite {
    this._motionStatus.reset({x:x, y:y, angle:0});
    return super.reset(x, y, health);
  }

  public update(): void {
    console.log("moveobject");
    if (!this._motionStatus) {
      throw new Error("Not initialized.");
    }

    var result = this._motionStatus.update();
    this.x = result.x;
    this.y = result.y;

    if (this._useAngle) {
      this.angle = result.angle;
    }
  }
}

export=MotionObject;

