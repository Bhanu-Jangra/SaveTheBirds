
var gameState = "serve";
var form;
var engine, world; 
var canvas;
var carGroup;
var bird, birdImg;
var car, car1, car2, car3, car4, car5, mobileTower, mobileTowerImg;
var backgroundImg;
var tree, treeImg;
var lifes;
var gamePlaySound;
var smoke;
var smokeImg;
var towerGroup;
var gameOver;
var ground, groundImg, grass, grassImg;

function preload(){
  backgroundImg = loadImage("Images/city.png");
  treeImg = loadImage("Images/tree.png");
  mobileTowerImg = loadImage("Images/mobileTower.png");
  birdImg = loadImage("Images/bird1.png");
  car1 = loadImage("Images/car1.png");
  car2 = loadImage("Images/car2.png");
  car3 = loadImage("Images/car3.png");
  car4 = loadImage("Images/car4.png");
  car5 = loadImage("Images/car5.png");
  smokeImg = loadImage("Images/smoke.png");
  groundImg = loadImage("Images/road.png");
  grassImg = loadImage("Images/grass.png");

  gamePlaySound = loadSound("sounds/GameInProgress.wav");
  gameOver = loadSound("sounds/GameOverSound.wav");
}

function setup(){
  canvas = createCanvas(displayWidth, displayHeight);

    carGroup = createGroup();
    towerGroup = createGroup();
    lifes = 3;

    form = new Form();

    bird = createSprite(displayWidth-1200,displayHeight-400,20);
    bird.addImage(birdImg);

    ground = createSprite(displayWidth-700, displayHeight-600);
    ground.addImage(groundImg);
    ground.scale = 2.5;
    
    grass = createSprite(displayWidth-1050, displayHeight-450);
    grass.addImage(grassImg);
    grass.scale = 3;

     

}

function draw(){

  if(gameState === "serve"){
    background("yellow");
    form.display();
  }

  if(gameState === "play"){
    background(backgroundImg);
    drawSprites();
    textSize(25);
    fill("red");
    text("Lifes: " + lifes, displayWidth-900, displayHeight-700);

    //gamePlaySound.play();


    spawnCars();
    spawnMobileTower();
    spawnTree();


    if(keyDown(UP_ARROW) && bird.y > 134){
      bird.y = bird.y-10;
    }

    if(keyDown(DOWN_ARROW) && bird.y < 520){
      bird.y = bird.y+10;
    }

    if(towerGroup.isTouching(bird)){
      gameState = "end";
    }


  }

  else if(gameState === "end"){
    background("red");
    textSize(50);
    fill("cyan");
    text("Game Over", displayWidth-700,displayHeight-500);
    gamePlaySound.stop();
    gameOver.play();


  }

}

function hide(){
    form.title.hide();
    form.instructions.hide();
    form.story.hide();
    form.button.hide();
  }

  function spawnTree(){
    if(frameCount % 700 === 0){
      tree = createSprite(displayWidth-45,displayHeight-200);
      tree.debug = true;
      tree.setCollider("rectangle", 0,0, 150, 200);
      tree.addImage(treeImg);
      tree.scale = 2;
      tree.velocityX = -7;
      
      tree.lifetime = 200;

    }
  }

  function spawnCars(){
    if(frameCount % 280 === 0){
      car = createSprite(displayWidth-50,displayHeight-200);
      car.velocityX = -8;
      
      var rand = Math.round(random(1,5));

      switch(rand){
          case 1: car.addImage(car1);
                  break;
          case 2: car.addImage(car2);
                  break;
          case 3: car.addImage(car3);
                  break;
          case 4: car.addImage(car4);
                  break;
          case 5: car.addImage(car5);
                  break;
          default: break;
      }

      if(frameCount % 10 === 0){
      for(var i = 4; i <= 4; i++){
      smoke = createSprite(car.x+220, i);
      smoke.addImage(smokeImg);
      smoke.scale = 0.25;

      smoke.velocityX = car.velocityX;
      smoke.velocityY = -5;
      }

    
    }

      /*for(var i = 3; i <= 3; i++){
      smoke.push(smokeImg, car.x+50, car.x-20, i, i);
      }*/

      console.log(smoke);

      car.lifeTime = 200;

      carGroup.add(car);
  }

}
  
function spawnMobileTower(){
  if(frameCount % 170 === 0){
  mobileTower = createSprite(displayWidth-100, displayHeight-200);
  mobileTower.addImage(mobileTowerImg);
  mobileTower.setCollider("circle", 0, -120, 130);
  mobileTower.velocityX = -8;

  mobileTower.lifetime = 200;

  towerGroup.add(mobileTower);
  }
}
