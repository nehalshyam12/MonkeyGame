
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup,invisibleGround
var score
var survivalTime = 0;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}


function setup() {
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  
  invisibleGround =  createSprite(200,350,400,10);
  invisibleGround.visible = false;
  
  score = 0

  
}


function draw() {

  background(180);
  
  
  stroke("white");
  textSize(20);
  fill("red");
  text("score:"+score,300,50);
  score = Math.round(frameCount / 3);
  
  stroke("white");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survivial Time : "+survivalTime,100,50);
  
  
  
  ground.x = ground.width/2;
  console.log(ground.x);
  
  
  if(keyDown("space") && monkey.y >= 310) {
      monkey.velocityY = -19;
    
    }
   monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(invisibleGround)
  
  
  if(monkey.isTouching(bananaGroup)) {
     bananaGroup.destroyEach();
     } 
     
     
  
  
  drawSprites();
  
  food();
  obstacles();
  
}



function food(){
  
  if(frameCount % 80 === 0){
     var banana = createSprite(500,10,10,20);
    banana.addImage("banana",bananaImage);
    banana.velocityX = -(5 + 2 * score / 100)
    banana.y = Math.round(random(120,200));
    banana.scale = 0.1;
    bananaGroup.add(banana);
    banana.setCollider("rectangle",0,0,400,400);
  
  }
  
  
}
function obstacles(){
  
  if(frameCount % 200 === 0 ){
    var obstaclestone = createSprite(500,310,23,32);
    obstaclestone.velocityX = -(5 + 2 * score/100);
    obstaclestone.addImage("obstacle",obstacleImage);
    obstaclestone.scale = 0.2;
    obstacleGroup.add(obstaclestone);
    obstacleGroup.setLifetimeEach(100);
    obstaclestone.setCollider("circle",0,0,200);
    
    
     }



}
