function setup() {
  createCanvas(700, 700);
  background(32);
}

function draw() {
  if (mouseIsPressed) {
    fill(0, 255, 255);
    circle(mouseX, mouseY, 25);
  }
}

function mouseClicked() {
  fill(0, 255, 0);
  circle(mouseX, mouseY, 50);
}
