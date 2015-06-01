///<reference path="../../../../typings/node/node.d.ts" />
///<reference path="../../../../typings/phaser/phaser.d.ts" />

import MotionStatus = require("../motion/MotionStatus");
import IMotionObjectInitializeParams = require("./IMotionObjectInitializeParams");

class MotionObject extends Phaser.Sprite{
  private _motionStatus: MotionStatus;
  private _useAngle: boolean;

  public initialize (params: IMotionObjectInitializeParams) {
    this._motionStatus = params.status;
    this._useAngle = (params.useAngle);
    this._motionStatus.speed = (params.speed) ? params.speed : 1;
    this.x = params.startPoint.x;
    this.y = params.startPoint.y;
    this.angle = params.startPoint.angle;

    this.reset(this.x, this.y, params.health);
  }

  public reset(x:number, y:number, health:number = 0): Phaser.Sprite {
    this._motionStatus.reset({x:x, y:y, angle:0});
    return super.reset(x, y, health);
  }

  public update(): void {
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

