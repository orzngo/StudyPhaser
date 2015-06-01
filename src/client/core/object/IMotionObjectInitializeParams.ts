///<reference path="../../../../typings/node/node.d.ts" />

import MotionStatus = require("../motion/MotionStatus");
import IMotionPoint = require("../motion/IMotionPoint");

interface IMotionObjectInitializeParams {
  status: MotionStatus;
  speed?: number;
  useAngle?: boolean;
  startPoint: IMotionPoint;
  health?: number;
}

export=IMotionObjectInitializeParams;
