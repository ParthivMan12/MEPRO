var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200, 200, 50, 50);
}

function draw() 
{
  background("yellow");
  if (keyDown(RIGHT_ARROW)) {
      background("red");
  }
  drawSprites();
}




