var fixedRect, movingRect;


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200,50,100);
  fixedRect.shapeColor = "blue";
  fixedRect.debug = true;
  movingRect = createSprite(520,200,100,50);
  movingRect.shapeColor = "white";
  movingRect.debug = true;

  movingRect.velocityX =-2;
  fixedRect.velocityX =3;
}

function draw() {
  background(0,0,0);  

if(movingRect.x-fixedRect.x<movingRect.width/2 + fixedRect.width/2
  && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2){
  movingRect.velocityX = movingRect.velocityX*(-1);
  fixedRect.velocityX = fixedRect.velocityX*(-1);
  }

  if(movingRect.y-fixedRect.y<movingRect.height/2 + fixedRect.height/2
    && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
    movingRect.velocityY = movingRect.velocityY*(-1);
    fixedRect.velocityY = fixedRect.velocityY*(-1);
    }


  drawSprites();
}