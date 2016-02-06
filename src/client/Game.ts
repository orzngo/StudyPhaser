///<reference path="../../typings/node/node.d.ts" />
///<reference path="../../typings/phaser/phaser.d.ts" />

import TitleState = require("./core/state/TitleState");
import GameState = require("./core/state/GameState");

/**
 * エントリーポイント的なもの
 */
class Game {
  private _game:Phaser.Game; 

  constructor() {
    this._game = new Phaser.Game(640, 480, Phaser.AUTO, 'game');
    this._game.state.add(TitleState.NAME, new TitleState());
    this._game.state.add(GameState.NAME, new GameState());

    this._game.state.start(TitleState.NAME);
  }

}

export=Game;
