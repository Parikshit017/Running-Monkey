var monkey, monkey_running;
var banana, bananaImage, obstacle, obstacleImage, ground;
var FoodGroup, obstacleGroup;
var score;
var survivalTime = 0;

function preload() {

  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}

function setup() {

  createCanvas(600, 400);

  // create Obstacles and food groups
  obstacleGroup = new Group();
  FoodGroup = new Group()

  monkey = createSprite(80, 315, 10, 10);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(300, 335, 1200, 10);
  ground.velocityX = -4;
  ground.x = ground.width / 2;

}

function draw() {
  background("white");

  console.log(monkey.y);

  //reset the ground
  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  //make the monkey jump  
  if (keyDown("space")) {
    monkey.velocityY = -13;
  }

  //add gravity
  monkey.velocityY = monkey.velocityY + 0.8;

  survivaltime = Math.ceil(World.frameCount / World.frameRate);
  text("Survival Time: " + survivaltime, 100, 50);

  spawnFood();
  spawnObstacles();

  monkey.collide(ground);

  drawSprites();
}


function spawnObstacles() {
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(400, 300, 10, 40);
    obstacle.velocityX = -6;
    obstacle.addImage(obstacleImage);

    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.2;
    obstacle.lifetime = -300;

    //adding obstacles to the group
    obstacleGroup.add(obstacle);

  }
}




function spawnFood() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    banana = createSprite(600, 100, 40, 10);
    banana.y = Math.round(random(120, 200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;

    //assign lifetime to the banana
    banana.lifetime = -134;

    //adding food to the group
    FoodGroup.add(banana);

  }

}