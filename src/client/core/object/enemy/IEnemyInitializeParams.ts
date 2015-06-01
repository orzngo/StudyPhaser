///<reference path="../../../../../typings/node/node.d.ts" />

import IMotionObjectInitializeParams = require("../IMotionObjectInitializeParams");

interface IEnemyInitializeParams extends IMotionObjectInitializeParams{
  score: number;
}

export=IEnemyInitializeParams;
