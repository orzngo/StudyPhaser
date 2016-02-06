///<reference path="../../../../../typings/node/node.d.ts" />
///<reference path="../../../../../typings/phaser/phaser.d.ts" />

import MotionStatus = require("../../motion/MotionStatus");
import MotionObject = require("../MotionObject");
import IEnemyInitializeParams = require("./IEnemyInitializeParams");

class Enemy extends MotionObject{
  private _score: number;

  public initialize (params: IEnemyInitializeParams) {
    this._score = params.score;
    super.initialize(params);
  }

}

export=Enemy;

