let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;

// in p5.js, the function runs on page load:
function setup() {
  createCanvas(canvasWidth, canvasHeight);
  // invoke any drawing functions inside of setup.
  // functions should all go between "createCanvas()" and "drawGrid()"

  //   drawNShapesDirectionFlexible(30, 30, 335, 0, "square", "column");
  //   drawNShapesDirectionFlexible(4, 100, 120, 200, "circle", "row");
  //   drawNShapesDirectionFlexible(8, 50, 725, 425, "circle", "row");

  //   drawNShapesFlexible(30, 30, 335, 0, "square");
  //   drawNShapesFlexible(4, 100, 120, 200, "circle");
  //   drawNShapesFlexible(8, 50, 725, 25, "square");

  //   drawNCirclesFlexible(30, 25, 400, 0);
  //   drawNCirclesFlexible(4, 100, 100, 200);
  //   drawNCirclesFlexible(8, 50, 700, 100);

  //   draw5CirclesFor();
  //   draw5CirclesWhile();
  //   drawNCircles(10);
  //   draw5Circles();
  //   draw5RedSquares();

  drawGrid(canvasWidth, canvasHeight);
}

// my first function
function draw5Circles() {
  noFill();
  // fill('red');
  circle(100, 200, 50); // centerX, centerY, radius
  circle(100, 250, 50);
  circle(100, 300, 50);
  circle(100, 350, 50);
  circle(100, 400, 50);
}

function draw5CirclesFor() {
  noFill();
  let x = 100;
  let y = 200;
  let radius = 50;

  for (let i = 0; i < 5; i++) {
    circle(x, y, radius);
    y += 50;
  }
}

function draw5CirclesWhile() {
  noFill();
  let x = 200;
  let y = 200;
  let radius = 50;
  let i = 0;

  while (i < 5) {
    circle(x, y, radius);
    y += 50;
    radius += 10;
    i++;
  }
}

function drawNCircles(n) {
  noFill();
  let x = 300;
  let y = 200;
  let radius = 50;

  for (let i = 0; i < n; i++) {
    circle(x, y, radius);
    y += 50;
  }
}

function drawNCirclesFlexible(n, radius, x, y) {
  noFill();
  for (let i = 0; i < n; i++) {
    circle(x, y, radius);
    y += radius;
  }
}

function drawNShapesFlexible(n, size, x, y, shape) {
  fill("blue");

  for (let i = 0; i < n; i++) {
    if (shape === "circle") {
      circle(x, y, size);
    } else square(x, y, size);

    y += size;
  }
}

function drawNShapesDirectionFlexible(n, size, x, y, shape, direction) {
  fill("green");

  for (let i = 0; i < n; i++) {
    if (shape === "circle") {
      circle(x, y, size);
    } else square(x, y, size);

    if (direction === "row") x += size;
    else y += size;
  }
}
