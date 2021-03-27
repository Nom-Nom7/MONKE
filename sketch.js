
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0
var ground

function preload(){
  
  createCanvas(400,400);
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}


function setup() {

  monkey = createSprite(50,350,10,10);
  monkey.addAnimation("monke",monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(200,385,600,10);
  ground.velocityX = -5;
  
  FoodGroup = new Group();
  obstaclegroup = new Group();
}


function draw() {
  
  background("white");
  
    text("Survival Time =" + score,175,25);
  
    if(ground.x<100)
    {
    ground.x = ground.width/2;
    }
  
  monkey.collide(ground);
  
  if(keyDown("space"))
    {
      monkey.velocityY = -10
    }
  
  monkey.velocityY = monkey.velocityY + 0.5;
  
  score= score = World.frameCount/10;
  
  banana();
  obstacle();

drawSprites();
  
}

function banana() {
  
  if(World.frameCount % 80 == 0) {
    var banana = createSprite(375,250,10,10);
    banana.addImage(bananaImage);
    banana.velocityX = -5;
    banana.scale = 0.1;
    banana.lifetime = 80;
    FoodGroup.add(banana);
    
  }
}

function obstacle() {
  
  if(World.frameCount % 100 == 0) {
    var obstacle = createSprite(375,340,10,10);
    obstacle.addImage(obstaceImage);
    obstacle.velocityX = -10;
    obstacle.scale = 0.2;
    obstacle.lifetime = 40;
    obstaclegroup.add(obstacle);
    
  }
}


  
