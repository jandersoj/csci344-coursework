const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

function setup() {
  createCanvas(canvasWidth, canvasHeight);

  drawMonster(100, 100, 150, "#0bc9cd", false);
  drawMonster(300, 200, 75, "#8093f1", true);
  drawMonster(100, 325, 100, "#8093f1", false);
  drawMonster(250, 375, 125, "#7fb285", true);
  drawMonster(550, 200, 250, "#7fb285", false); // function invocations goes here:

  drawGrid(canvasWidth, canvasHeight);
}

// function definition goes here:
function drawMonster(x, y, size, color, isSurprised) {
  rectMode(CENTER);
  fill(color);
  rect(x, y, size, size);

  const leftEyeX = x + size / 6;
  const rightEyeX = x - size / 6;
  const eyeY = y - size / 5;
  const eyeSize = size / 5;
  x + size / 4, y + size / 1.5;

  fill("white");
  square(leftEyeX, eyeY, eyeSize);
  square(rightEyeX, eyeY, eyeSize);

  fill("black");
  square(leftEyeX, eyeY + eyeSize / 4, eyeSize / 2);
  square(rightEyeX, eyeY + eyeSize / 4, eyeSize / 2);

  const mouthY = y + size / 4;
  const mouthX = x;

  if (isSurprised) {
    fill("black");
    rect(mouthX, mouthY, size / 3, size / 4);
  } else {
    fill("black");
    rect(mouthX, mouthY, size / 2, size / 6);
  }
}
