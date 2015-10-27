'use strict';

function playerService() {
  this.player = {
    wins: 0,
    losses: 0
  };
}

playerService.prototype.addWin = function(){
  this.player.wins++;
};

playerService.prototype.addLoss = function(){
  this.player.losses++;
};

var pongScoreForm = ng.
  Component({
    selector: 'pong-score-form',
    properties: ['person'],
    bindings: [playerService]
  }).
  View({
    templateUrl: './pong-score-form.html'
  }).
  Class({
    constructor: [playerService, function(playerService){
      this.playerService = playerService;
    }]
  });

var pongScoreApp = ng.
  Component({
    selector: 'pong-score-app',
    bindings: [playerService]
  }).
  View({
    templateUrl: './pong-score-app.html',
    directives: [pongScoreForm]
  }).
  Class({
    constructor: [function(){}]
  });

ng.bootstrap(pongScoreApp);
