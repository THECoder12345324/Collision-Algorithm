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
  //Making moving rect sync with mouse
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  console.log(movingRect.x - fixedRect.x);
  
  //Makes sure the moving rect and fixed rect are touching each other
  if (movingRect.x - fixedRect.x < fixedRect.width / 2 + movingRect.width / 2 && 
    fixedRect.x - movingRect.x < fixedRect.width / 2 + movingRect.width / 2 &&
     movingRect.y - fixedRect.y < fixedRect.width / 2 + movingRect.width / 2 &&
     fixedRect.y - movingRect.y < fixedRect.width / 2 + movingRect.width / 2) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
    
  }
  //Changes the color back to green if it is not touching
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  
}
