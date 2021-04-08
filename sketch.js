var bullet,wall;
var speed,weight,thickness
var damage
function setup() {
  createCanvas(1200,800);
 bullet= createSprite (100, 400, 30, 10);
 bullet.shapeColor="white"
 
 speed = random(223,321);
  weight = random(30,52);
  thickness=random(22,83);
 wall= createSprite (900, 400, thickness, 800);
 wall.shapeColor="grey"
   bullet.velocityX = speed;
}

function draw() {
  background(0);  
  if(hasCollided(bullet,wall))
{
  bullet.velocityX=0
   damage=0.5 * weight * speed*speed/(thickness*thickness*thickness)

  if(damage>10)
  {
     wall.shapeColor=color(255,0,0)
  }


  if(damage<10)
  {
    wall.shapeColor=color(0,255,0)
  }
}
text("damage="+damage,300,200)
  drawSprites();
}
function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}