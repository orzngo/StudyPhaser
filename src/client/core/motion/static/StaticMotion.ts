//モーションの経過時刻を与えると、対応したIMotionPointを返すクラス

import IMotionPoint = require("../IMotionPoint");
import IMotion = require("../IMotion");

class StaticMotion implements IMotion {
  constructor(private _motionPoints:IMotionPoint[]) {
  }

  get(progress: number): IMotionPoint {
    if (progress >= this.length) {
      progress = this.length -1;
    }
    return this._motionPoints[progress];
  }

  get length(): number {
    return this._motionPoints.length;
  }
}

export=StaticMotion;
