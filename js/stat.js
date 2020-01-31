'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var BASIC_X = 100;
var BASIC_Y = 10;
var BAR_WIDTH = 40;
var BAR_HEIGHT = -150;
var BAR_Y_POSITION = CLOUD_HEIGHT - (BASIC_Y * 3);
var basicMargin = BASIC_X + 40;
var columnMargin = BAR_WIDTH + 50;
var colorRed = 'rgba (255, 0, 0, 1)';
var fontData = '16px PT Mono';
var textData = ['Ура вы победили', 'Список результатов:'];
var colorBlack = '#000'

// var renderCLoud = function (ctx, x, y, color) {
//   ctx.fillStyle = color;
//   ctx.fillRect (x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
// };

// var getMaxElement = function (arr) {
//   var maxElement = arr [0];

//   for (var i = 1; i < arr.length; i++) {
//     if (arr[i] > maxElement) {
//       maxElement = arr[i];
//     }
//   }
//   return maxElement;
// }

// var getText = function (ctx, color, font, text, x, y) {
//   ctx.fillStyle = color;
//   ctx.font = font;
//   ctx.fillText (text, x, y);
//   ctx.fillText (text, x, y);
// };

