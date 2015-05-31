///<reference path="../../../../../typings/node/node.d.ts" />
///<reference path="../../../../../typings/phaser/phaser.d.ts" />

class Line {
  public static TYPE_LINEAR = "linear";
  public static TYPE_SPLINE = "spline"
  public static TYPE_BEZIER = "bezier"


  private _x:number[] = [];
  private _y:number[] = [];

  constructor (points: [{x: number; y: number;}], private _type: string) {
    for (var key in points) {
      this._x.push(points[key].x);
      this._y.push(points[key].y);
    }
  }

  get xArray(): number[] {
    return this._x;
  }

  get yArray(): number[] {
    return this._y;
  }

  get type(): string {
    return this._type;
  }
}

export=Line;
