var box1;

function setup() {
  createCanvas(500,600);
  box1 = createSprite(200,200,20,20);
}

function draw() 
{
  background(30);
  if(keyIsDown(RIGHT_ARROW)){
  background("blue")
}
  if(keyIsDown(LEFT_ARROW)){
  background("green")
}
if(keyIsDown(DOWN_ARROW)){
  background("red")
}
if(keyIsDown(UP_ARROW)){
  background("yellow")
}
}



