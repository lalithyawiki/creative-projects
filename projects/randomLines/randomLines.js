let newEndX = 0;
let newEndY = 0;
let paint = null;

let lineCoordinates = [];

function setup() {
  createCanvas(1080 / 3, 1920 / 3);
  newEndX = random(0, 400);
  newEndY = random(0, 400);
  paint = color(random(0, 256), random(0, 256), random(0, 256));
  lineCoordinates.push({
    x: 0,
    y: 0,
    endX: newEndX,
    endY: newEndY,
    paint: paint,
  });

  strokeWeight(5);
}

function draw() {
  frameRate(10);
  background(220);
  let lastX = 0;
  let lastY = 0;

  for (let i = 0; i < lineCoordinates.length; i++) {
    let current = lineCoordinates[i];
    stroke(current.paint);
    line(current.x, current.y, current.endX, current.endY);

    if (i === lineCoordinates.length - 1) {
      lastX = current.endX;
      lastY = current.endY;
    }
  }

  newEndX = random(0, 400);
  newEndY = random(0, 400);
  paint = color(random(0, 256), random(0, 256), random(0, 256));
  lineCoordinates.push({
    x: lastX,
    y: lastY,
    endX: newEndX,
    endY: newEndY,
    paint: paint,
  });
}