var stillrect, movingrect,obby1,obby2,obby3,obby4;





function setup() {

  createCanvas(1200,800);
  stillrect = createSprite(400, 200, 50, 50);
  movingrect = createSprite(800, 200, 80, 30);
  stillrect.shapeColor = "green"
  movingrect.shapeColor = "green"
obby1 = createSprite(100,100,50,50)
obby1.shapeColor = "purple"
obby2 = createSprite(200,100,50,50)
obby2.shapeColor = "purple"
obby3 = createSprite(700,100,50,50)
obby3.shapeColor = "purple"
obby4 = createSprite(700,800,50,50)
obby4.shapeColor = "purple"
obby3.velocityY = 5;
obby4.velocityY = -5;
}

function draw() {
  background ("black");  
movingrect.x = mouseX
movingrect.y = mouseY
if(isTouch(movingrect,obby1)){
  obby1.shapeColor = "blue"
  movingrect.shapeColor = "blue"



}
else{
obby1.shapeColor = "purple"
movingrect.shapeColor = "purple"
}
bounceOff(obby4,obby3)
drawSprites();
}











