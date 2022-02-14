
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);

}

function draw() 
{

  if (keyIsDown(RIGHT_ARROW))
  {
    background("#ff8080");

  }

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("#80ff80");
    
  }

  if (keyIsDown(UP_ARROW)) 
  {
    background("#8080ff");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("#ffff80");

  }

  drawSprites();
}

