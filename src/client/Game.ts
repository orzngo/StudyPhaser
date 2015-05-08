///<reference path="../../typings/node/node.d.ts" />
///<reference path="../../typings/phaser/phaser.d.ts" />

import TitleState = require("./model/state/TitleState");
import GameState = require("./model/state/GameState");

class Game {
  private _game:Phaser.Game; 

  constructor() {
    this._game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');
    this._game.state.add(TitleState.NAME, new TitleState());
    this._game.state.add(GameState.NAME, new GameState());

    this._game.state.start(TitleState.NAME);
  }

}

export=Game;
