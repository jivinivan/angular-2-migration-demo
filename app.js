'use strict';

angular
  .module('pongScoreApp', [])
  .controller('PongScoreCtrl', PongScoreCtrl);

class PongScoreCtrl {
  constructor() {
    this.player = {
      wins: 0,
      losses: 0
    };
  }

  addWin() {
    this.player.wins++;
  };

  addLoss() {
    this.player.losses++;
  };
}
