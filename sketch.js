
var fixedrect,movingrect
function setup() {
  createCanvas(800,400);
  
  fixedrect=createSprite(200,200,50,80);
  movingrect=createSprite(500,300,80,50);
  movingrect.debug=true;
  fixedrect.debug=true;
  movingrect.shapeColor="green";
  fixedrect.shapeColor="green";
}

function draw() {
  background(0);  
  movingrect.x=mouseX;
  movingrect.y=mouseY;
  if(movingrect.x-fixedrect.x<=movingrect.width/2+fixedrect.width/2){
    movingrect.shapeColor="red";
  fixedrect.shapeColor="red";
  }
  else{
    movingrect.shapeColor="green";
  fixedrect.shapeColor="green";
  }
  drawSprites();
}