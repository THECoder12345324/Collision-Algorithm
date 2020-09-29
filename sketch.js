var fixedRect, movingRect;

function setup()
{
createCanvas(1200,600);
fixedRect= createSprite(600,400,50,80);
fixedRect.shapeColor="green";
movingRect= createSprite(400,200,80,50);
movingRect.shapeColor="green";
movingRect.debug = true;
fixedRect.debug = true;



}

function draw()
{
  
  background("white");
  drawSprites();
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  console.log(movingRect.x - fixedRect.x);
  if (movingRect.x - fixedRect.x < fixedRect.width / 2 + movingRect.width / 2 && 
    fixedRect.x - movingRect.x < fixedRect.width / 2 + movingRect.width / 2 &&
     movingRect.y - fixedRect.y < fixedRect.width / 2 + movingRect.width / 2 &&
     fixedRect.y - movingRect.y < fixedRect.width / 2 + movingRect.width / 2) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
    
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  
}