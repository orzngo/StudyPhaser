///<reference path="../../../../typings/node/node.d.ts" />
///<reference path="../../../../typings/phaser/phaser.d.ts" />

import IMotion = require("./IMotion");
import IMotionPoint = require("./IMotionPoint");


/**
 * モーションを管理する機能を持つクラス。各MotionObjectインスタンスは
 * このクラスのインスタンスを持ち、自分が持つモーションの再生、遷移をこいつにやってもらう
 */
class MotionStatus {
  private _speed: number = 1;

  // 直近の計算結果。内部計算用のキャッシュ
  private _recentPoint: IMotionPoint;
  // 現在の座標
  private _currentPoint: IMotionPoint;
  // 始点の座標
  private _startPoint: IMotionPoint;

  // 現在どのモーションを再生しているか
  private _currentMotion: number = 0;
  // 現在モーションのどこを再生しているか
  private _currentStep: number = 0;

  private _loop: boolean = false;
  private _finished: boolean = false;

  private _reverseX: boolean = false;
  private _reverseY: boolean = false;

  // モーション再生開始前に待つフレーム
  //TODO:ディレイ対応
  private _delay: number = 0;


  constructor(private _motions: IMotion[], startPoint: IMotionPoint = {x:0, y:0, angle: 0}) {
    this.reset(startPoint);
  }

  /**
   * 呼び出すたびに、speedに応じてモーションを再生した結果の座標を返す
   */
  public update(): IMotionPoint {
    var motion = this._motions[this._currentMotion];
    var nextMotionFlag = false;

    if (this._currentStep > motion.length) {
      this._currentStep = motion.length - 1;
      nextMotionFlag = true;
    }

    var result = motion.get(this._currentStep);
    // 直近の座標との差分を出す。
    // TODO:角度の扱い。軸反転時に定数をangleに増減させればよさそう
    // TODO:モーションを逆から再生できるようにする
    var diff:IMotionPoint = {
      x: result.x - this._recentPoint.x,
      y: result.y - this._recentPoint.y,
      angle: result.angle
    }

    // 内部計算用の座標にはそのまま差分を適用
    this._recentPoint.x += diff.x;
    this._recentPoint.y += diff.y;
    this._recentPoint.angle = diff.angle;

    if (this._reverseX) {
      this._currentPoint.x -= diff.x;
    } else {
      this._currentPoint.x += diff.x;
    }

    if (this._reverseY) {
      this._currentPoint.y -= diff.y;
    } else {
      this._currentPoint.y += diff.y;
    }

    this._currentPoint.angle = diff.angle;

    if (nextMotionFlag) {
      this._currentMotion++;
      if (this._currentMotion >= this._motions.length) {
        if (this._loop) {
          this._currentStep = 0;
          this._currentMotion = 0;
        } else {
          this._currentMotion = this._motions.length -1;
          this._finished = true;
        }
      } else {
        this._currentStep = 0;
      }

    } else {
      this._currentStep += this._speed;
    }
    return this._currentPoint;
  }

  public reset(point: IMotionPoint): void {
    this._currentPoint = point;
    this._recentPoint = {x:0, y:0, angle:0};
    this._startPoint = point;
    this._currentStep = 0;
    this._currentMotion = 0;
  }


  public set speed(val: number) {
    this._speed = val;
  }


  public get loop(): boolean {
    return this._loop;
  }

  public set loop(val: boolean) {
    this._loop = val;
  }

  private set reverseX(val:boolean) {
    this._reverseX = val;
  }

  private set reverseY(val:boolean) {
    this._reverseY = val;
  }

  private set delay(val: number) {
    this._delay = val;
  }
}

export=MotionStatus;
