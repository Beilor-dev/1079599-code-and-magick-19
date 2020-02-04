'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var BASE_X = 100;
var BASE_Y = 10;
var BAND_WIDTH = 40;
var BAND_HEIGHT = -150;
var BAND_Y_POSITION = CLOUD_HEIGHT - (BASE_Y * 3);
var baseMargin = BASE_X + 40;
var columnMargin = BAND_WIDTH + 50;
var colorRed = 'rgba(255, 0, 0, 1)';
var fontData = '16px PT Mono';
var textData = ['Ура вы победили', 'Список результатов:'];
var colorBlack = '#000';

var drawCLoud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var getRandomColor = function (min, max) {
  var randomColor = min + Math.random() * (max + 1 - min);
  randomColor = Math.floor(randomColor);
  return randomColor;
};

var drawText = function (ctx, color, font, text, x, y) {
  ctx.fillStyle = color;
  ctx.font = font;
  ctx.fillText(text, x, y);
  ctx.fillText(text, x, y);
};

window.renderStatistics = function (ctx, players, times) {
  drawCLoud(ctx, BASE_X + 10, BASE_Y + 10, 'rgba(0, 0, 0, 0.7)');
  drawCLoud(ctx, BASE_X, BASE_Y, '#fff');

  drawText(ctx, colorBlack, fontData, textData[0], baseMargin - 20, BASE_Y * 4);
  drawText(ctx, colorBlack, fontData, textData[1], baseMargin - 20, BASE_Y * 6);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = colorBlack;
    ctx.fillText(players[i], baseMargin + (columnMargin * i), CLOUD_HEIGHT - BASE_Y);
    ctx.fillText(Math.round(times[i]), baseMargin + (columnMargin * i), BAND_Y_POSITION + (BAND_HEIGHT * times[i] / maxTime) - BASE_Y);
    if (players[i] === 'Вы') {
      ctx.fillStyle = colorRed;
    } else {
      ctx.fillStyle = 'hsl(240, 100%,' + getRandomColor(2, 100) + '%)';
    }
    ctx.fillRect(baseMargin + (columnMargin * i), BAND_Y_POSITION, BAND_WIDTH, (BAND_HEIGHT * times[i] / maxTime));
  }
};
