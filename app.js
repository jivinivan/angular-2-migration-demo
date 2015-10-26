'use strict';

angular
  .module('pongScoreApp', [])
  .controller('pongScoreCtrl', pongScoreCtrl)
  .directive('pongScoreForm', pongScoreDirective);

function pongScoreCtrl() {}

function pongScoreDirective() {
  return {
    controllerAs: 'formCtrl',
    controller: [function(){
      this.player = {
        wins: 0,
        losses: 0
      };

      this.addWin = function() {
        this.player.wins++;
      };

      this.addLoss = function() {
        this.player.losses++;
      };
    }]
  };
}
