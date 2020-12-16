
function setup() {
  createCanvas(1600, 400);
  wall=createSprite(1200,250,60,250)
  bullet=createSprite(50,250,35,5)
  bullet.shapeColor=("white")
  bullet.velocityX=1.5
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
  wall.width=thickness
}

function draw() {
  background(220);
  bullet.velocityX=speed
  if(wall.x-bullet.x<bullet.width/2+wall.width/2)
{
  bullet.velocityX=0
  var damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness)
  if(damage>10)
{
  wall.shapeColor=("red")
}  
  
   if(damage<10)
{
  wall.shapeColor=("green")
}  
}  
  
  
  
  
  
  
  
  
  drawSprites()
}