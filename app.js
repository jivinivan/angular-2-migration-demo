'use strict';

angular
  .module('pongScoreApp', [])
  .controller('pongScoreCtrl', pongScoreCtrl);

function pongScoreCtrl() {
  this.player = {
    wins: 0,
    losses: 0
  };
}

pongScoreCtrl.prototype.addWin = function() {
  this.player.wins++;
};

pongScoreCtrl.prototype.addLoss = function() {
  this.player.losses++;
};
