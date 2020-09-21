'use strict';

let CLOUD_WIDTH = 420;
let CLOUD_HEIGHT = 270;
let CLOUD_X = 100;
let CLOUD_Y = 10;
let GAP = 90;
let FONT_GAP = 15;
let TEXT_WIDTH = 50;
let POINT_X_TEXT = 160;
let POINT_Y_TEXT = 230;
let POINT_X_RECT = 160;
let POINT_Y_RECT = 60;
let COLUMN_HEIGHT = 150;
let COLUMN_WIDTH = 40;

 //  X = (COLUMN-HEIGHT * times[i]) / maxTime

let BAR_HEIGHT = 150;

let renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.fillStyle = `#000`;
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';

  ctx.fillText('2725:', 160, 60);
  ctx.fillText('4025:', 220, 60);
  ctx.fillText('1244:', 310, 60);
  ctx.fillText('1339:', 390, 60);

  ctx.fillText('Ура Вы победили !', 120, 25);
  ctx.fillText('Список результатов:', 120, 45);

};


window.renderStatistics = function(ctx, players, times) {
  let getMaxElement = function(arr) {
    let maxElement = arr[0];

    for (let i = 1; i < arr.length; i++) {
     maxElement = arr[i];
    }

    return maxElement;

  };

  renderCloud(
      ctx,
      CLOUD_X + CLOUD_Y,
      CLOUD_Y + CLOUD_Y,
      `rgba(0, 0, 0, 0.7)`
  );

  renderCloud(
      ctx, CLOUD_X,
      CLOUD_Y,
      `#fff`,
   );


   let maxTime = getMaxElement(times);

  for (let i = 0; i < players.length; i++) {
    ctx.fillStyle = `hsl(0, 91%, 47%)`;
    ctx.fillText(
      players[i],
      POINT_X_TEXT + (GAP * i),
      POINT_Y_TEXT,
    );

    ctx.fillRect(
      POINT_X_RECT + (GAP * i),
      POINT_Y_RECT,
      COLUMN_WIDTH,
      COLUMN_HEIGHT,
      (BAR_HEIGHT * times[i]) / maxTime,
    );
  }
}


