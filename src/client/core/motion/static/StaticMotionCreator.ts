///<reference path="../../../../../typings/node/node.d.ts" />
///<reference path="../../../../../typings/phaser/phaser.d.ts" />

import Line = require("./Line");
import StaticMotion = require("./StaticMotion");
import IMotionPoint = require("../IMotionPoint");

/**
 * Lineを与えるとStaticMotionを生成するクラス。
 * Lineは任意の２次元座標の配列
 * Lineでは直線の集合しか定義できないが、このクラスでそれを元にした曲線に変換できる
 */
class StaticMotionCreator {
  constructor (){
  }

  public create(line:Line): StaticMotion {
    var points: IMotionPoint[] = [];

    for (var i = 0; i < 1; i+= 1 / 1200) {
      var point:IMotionPoint = {angle:0, x: 0, y: 0};

      switch (line.type) {
        case Line.TYPE_BEZIER:
          point.x = Phaser.Math.bezierInterpolation(line.xArray, i);
        point.y = Phaser.Math.bezierInterpolation(line.yArray, i);
        break;
        case Line.TYPE_SPLINE:
          point.x = Phaser.Math.catmullRomInterpolation(line.xArray, i);
        point.y = Phaser.Math.catmullRomInterpolation(line.yArray, i);
        break;
        default:
          point.x = Phaser.Math.linearInterpolation(line.xArray, i);
        point.y = Phaser.Math.linearInterpolation(line.yArray, i);
        break;
      }
      points.push(point);
      if (points.length > 1) {
        var beforePoint = points[points.length - 2];
        point.angle = Phaser.Math.angleBetweenPoints(<any>beforePoint, <any>point);
      }
    }
    return new StaticMotion(points);

  }
}

export=StaticMotionCreator;
