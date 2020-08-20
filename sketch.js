var fixedRect, movingRect;
var gameObject1,gameObject2,gameObject3;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(300, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(300, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(500, 100,80,30);
  gameObject1.shapeColor = "green";
  gameObject1.debug = true;

  gameObject2 = createSprite(700, 100,80,30);
  gameObject2.shapeColor = "green";
  gameObject2.debug = true;

  gameObject3 = createSprite(900, 100,80,30);
  gameObject3.shapeColor = "green";
  gameObject3.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  gameObject1.x = mouseX
  gameObject1.y = mouseY
bounceOff(movingRect,fixedRect);
if (isTouching(gameObject1,gameObject2)) {
  gameObject1.shapeColor = ("red")
  gameObject2.shapeColor = ("red")
  
}
else {
  gameObject1.shapeColor = ("blue");
  gameObject2.shapeColor = ("blue");
}

  drawSprites();
}