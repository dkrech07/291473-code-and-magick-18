'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 20;
var TEXT_WIDTH = 50;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var BAR_HEIGHT = 150;
var USER_COLOR = 'rgba(255, 0, 0, 1)';

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
  var checkPlayers = function() {
    if (players.length !== times.length) {
      times.length = players.length;
      for (var i = 0; i < times.length; i++) {
        if (typeof times[i] !== 'number'){
          times[i] = 0;
        };
    }
  };

    if (players.length == 0) {
      console.log('Никто не играл');
      ctx.fillStyle = '#000';
      ctx.font = '16px PT Mono';
      ctx.textBaseline = 'hanging';
      ctx.fillText('Никто не играл', CLOUD_WIDTH / 2 + GAP, CLOUD_HEIGHT / 2);
    }
  };

  var renderCloud = function(direction, fix_coord, start_coord, finish_coord) {
    if (direction == 'x') {
      if (start_coord <= finish_coord) {
        for (var i = start_coord; i <= finish_coord; i += 5) {
          var j = fix_coord;
          i % 2 == 0 ? j += 5 : j += 0;
            ctx.lineTo(i, j);
        }
      } else {
        for (var i = start_coord; i >= finish_coord; i -= 5) {
          var j = fix_coord;
          i % 2 == 0 ? j += 5 : j += 0;
            ctx.lineTo(i, j);
        }
      }
    } else if (direction == 'y') {
      if (start_coord <= finish_coord){
        for(var j = start_coord; j <= finish_coord; j+=5){
          var i = fix_coord;
          j % 2 == 0 ? i += 5 : i += 0;
            ctx.lineTo(i, j);
        }
      } else {
        for(var j = start_coord; j >= finish_coord; j-=5){
          var i = fix_coord;
          j % 2 == 0 ? i += 5 : i += 0;
            ctx.lineTo(i, j);
        }
      }
    }
  };

  ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
  ctx.beginPath();
  ctx.moveTo(CLOUD_X + GAP, CLOUD_Y + GAP);
  renderCloud('x', CLOUD_Y + GAP, CLOUD_X + GAP, CLOUD_WIDTH + CLOUD_X + GAP);
  renderCloud('y', CLOUD_WIDTH + CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_HEIGHT + CLOUD_Y + GAP);
  renderCloud('x', CLOUD_HEIGHT + CLOUD_Y + GAP, CLOUD_WIDTH +  CLOUD_X + GAP, CLOUD_X + GAP);
  renderCloud('y', CLOUD_X + GAP, CLOUD_HEIGHT + CLOUD_Y + GAP, CLOUD_Y + GAP);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();

  ctx.fillStyle = "#fff";
  ctx.beginPath();
  ctx.moveTo(CLOUD_X, CLOUD_Y);
  renderCloud('x', CLOUD_Y, CLOUD_X, CLOUD_WIDTH + CLOUD_X);
  renderCloud('y', CLOUD_WIDTH + CLOUD_X, CLOUD_Y, CLOUD_HEIGHT + CLOUD_Y);
  renderCloud('x', CLOUD_HEIGHT + CLOUD_Y, CLOUD_WIDTH +  CLOUD_X, CLOUD_X,);
  renderCloud('y', CLOUD_X, CLOUD_HEIGHT + CLOUD_Y, CLOUD_Y);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили',  CLOUD_HEIGHT / 2, GAP * 3);
  ctx.fillText('Список результатов:',  CLOUD_HEIGHT / 2, GAP * 3 + FONT_GAP);

  checkPlayers();

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var playersColor = 'hsl(240, ' + Math.floor(Math.random()*100) + '% , 30%)';

    ctx.fillStyle = '#000'
    ctx.fillText(players[i], CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - GAP);
    ctx.fillText(Math.floor(times[i]), CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, BAR_HEIGHT + BAR_GAP * 2 - (BAR_HEIGHT * times[i] / maxTime) - GAP * 2);

    players[i] === 'Вы' ? ctx.fillStyle = USER_COLOR : ctx.fillStyle = playersColor;
    ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, BAR_HEIGHT + BAR_GAP * 2 - (BAR_HEIGHT * times[i] / maxTime), BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
  }

};
