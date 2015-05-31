import IMotionPoint = require("./IMotionPoint");

interface IMotion {
  get(progress: number): IMotionPoint;
  length: number;

}

export=IMotion;
