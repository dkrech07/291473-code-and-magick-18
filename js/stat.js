'use strict';

(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 10;
  var FONT_GAP = 20;
  var BAR_WIDTH = 40;
  var BAR_GAP = 50;
  var BAR_HEIGHT = 150;
  var USER_COLOR = 'rgba(255, 0, 0, 1)';

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var getMaxElement = function (arr) {
    var maxElement = arr[0];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  };

  window.renderStatistics = function (ctx, players, times) {
    var checkPlayers = function () {
      if (players.length !== times.length) {
        times.length = players.length;
        for (var i = 0; i < times.length; i++) {
          if (typeof times[i] !== 'number') {
            times[i] = 0;
          }
        }
      }

      if (players.length === 0) {
        ctx.fillStyle = '#000';
        ctx.font = '16px PT Mono';
        ctx.textBaseline = 'hanging';
        ctx.fillText('Никто не играл', CLOUD_WIDTH / 2 + GAP, CLOUD_HEIGHT / 2);
      }
    };

    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.textBaseline = 'hanging';
    ctx.fillText('Ура вы победили', CLOUD_HEIGHT / 2, GAP * 3);
    ctx.fillText('Список результатов:', CLOUD_HEIGHT / 2, GAP * 3 + FONT_GAP);

    checkPlayers();

    var maxTime = getMaxElement(times);

    for (var i = 0; i < players.length; i++) {
      var playersColor = 'hsl(240, ' + Math.floor(Math.random() * 100) + '% , 30%)';

      ctx.fillStyle = '#000';
      ctx.fillText(players[i], CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - GAP);
      ctx.fillText(Math.floor(times[i]), CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, BAR_HEIGHT + BAR_GAP * 2 - (BAR_HEIGHT * times[i] / maxTime) - GAP * 2);

      if (players[i] === 'Вы') {
        ctx.fillStyle = USER_COLOR;
      } else {
        ctx.fillStyle = playersColor;
      }
      ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, BAR_HEIGHT + BAR_GAP * 2 - (BAR_HEIGHT * times[i] / maxTime), BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
    }
  };
})();
