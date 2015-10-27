'use strict';

angular
  .module('pongScoreApp', [])
  .controller('pongScoreCtrl', pongScoreCtrl)
  .directive('pongScoreForm', pongScoreDirective)
  .service('pongScoreService', pongScoreService);

function pongScoreService() {
  this.player = {
    wins: 0,
    losses: 0
  };
}
pongScoreService.prototype.addWin = function() {
  this.player.wins++;
}
pongScoreService.prototype.addLoss = function() {
  this.player.losses++;
}

function pongScoreCtrl() {}

function pongScoreDirective() {
  return {
    controllerAs: 'formCtrl',
    controller: ['pongScoreService', function(pongScoreService) {
      this.player = pongScoreService.player;
      this.addWin = function addWin() {
        pongScoreService.addWin();
      }
      this.addLoss = function addLoss() {
        pongScoreService.addLoss();
      }
    }]
  };
}
