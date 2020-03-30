let positionX;
let speedX;
let positionY;
let speedY;
let sanicImage;
let mappedValue;
let value = 0;
let distance;
let increment;
let toggle;

function preload(){
  sanicImage = loadImage("images/tumblr_lvzhs5klqn1r83dego1_400.gif");
}

function setup() {
  // put setup code here
  createCanvas(1200, 550);
  background(161, 225, 255);//sonic background lol
distance = 10;
increment = 0.5;

positionX = 20;
speedX = 8;
positionY = 20;
speedY = 6;

noCursor();
mappedValue = 0;

}

function draw() {
//  background(161, 225, 255);
  mappedValue = map(mouseY, 0, 1400, 0, 255);

noStroke();
fill(mappedValue);
ellipse(mouseX, mouseY, 50, 50);

  image(sanicImage, positionX, 0, 0, positionY);
triangle(1, 600, 20, 500, 40, 600);
fill(94, 219, 75);
stroke(56, 255, 179);
strokeWeight(5);
positionX = positionX + speedX;

fill(value);
rect(25, 25, 50, 50);


if (positionX >= 1400 || positionX <= 0) {
  speedX = speedX * -1;

  distance = distance + increment;

  if (distance > 20 || distance < 5) {
    increment = increment * -1;
  }
  for (let i = 20; i < 1400; i += 20) {

  for (let j = 20; j < 1400; j += 20) {
    ellipse(i, j, distance, distance);
  }
}
}
function keyPressed() {
  if (keyCode === ENTER) {
    toggle = !toggle;
    }
      if (keyCode === RIGHT_ARROW) {
    positionX = positionX + 50;
  }
  if (keyCode === LEFT_ARROW) {
    positionX = positionX - 50;
  }
  if (keyCode === UP_ARROW) {
    positionY = positionY - 50;
  }
  if (keyCode === DOWN_ARROW) {
    positionY = positionY + 50;
  }
}

positionY = positionY + speedY;
if (positionY >= 1400 || positionY <= 0) {
  speedY = speedY * -1;
}

function mousePressed(){
  ellipse(100, 100, 50, 50);
}
}
