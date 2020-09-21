'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 90;
const POINT_X_TEXT = 160;
const POINT_Y_TEXT = 230;
const POINT_X_RECT = 160;
const POINT_Y_RECT = 220;
const COLUMN_WIDTH = 40;
const BAR_HEIGHT = 150;

const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.fillStyle = `#000`;
  ctx.font = `16px PT Mono`;
  ctx.textBaseline = `hanging`;

  ctx.fillText(`2725:`, 160, 60);
  ctx.fillText(`4025:`, 220, 60);
  ctx.fillText(`1244:`, 310, 60);
  ctx.fillText(`1339:`, 390, 60);

  ctx.fillText(`Ура Вы победили !`, 120, 25);
  ctx.fillText(`Список результатов:`, 120, 45);
};

window.renderStatistics = function (ctx, players, times) {
  const getMaxElement = function (arr) {
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
      `#fff`
  );

  const maxTime = getMaxElement(times);

  for (let i = 0; i < players.length; i++) {
    if (i === 0) {
      ctx.fillStyle = `hsl(0, 91%, 47%)`;
    } else {
      ctx.fillStyle = `hsl(220, ` + Math.floor(Math.random() * 100) + `%, 47%)`;
    }

    ctx.fillText(
        players[i],
        POINT_X_TEXT + (GAP * i),
        POINT_Y_TEXT
    );

    ctx.fillRect(
        POINT_X_RECT + (GAP * i),
        POINT_Y_RECT,
        COLUMN_WIDTH,
        -(BAR_HEIGHT * times[i]) / maxTime
    );
  }
};
