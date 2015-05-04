///<reference path="../../typings/node/node.d.ts" />
///<reference path="../../typings/phaser/phaser.d.ts" />

var pixi = require("pixi");
var phaser = require("phaser");

var win:any = window;

win.Phaser = phaser;
win.PIXI = pixi;

var img = require("../assets/img/char.png");

alert("hoo");
alert(img);
