var birdImage
var bird
var ground, sky;
var backgroundImg
var gameState = 0;
var startButton
var playButtonImg
var startGroup
var gameState = "play"
var log, logImage
var logGroup
var restartButton, restartImg

function preload() {

    birdImage = loadImage("BirdFlyingImg.png");
    backgroundImg = loadImage("birdFlyingBackgrround.jpg");
    playButtonImg = loadImage("play.jpg");
    logImage = loadImage("log4.png")
    restartImg = loadImage("restart3.png");
}

function setup() {
createCanvas(1200, 600);

   
  
    gameState = 0;


startButton = createSprite(560, 420, 20, 20);
startButton.addImage(playButtonImg)
startButton.scale = 0.3
    
    ground = createSprite(600, 580, 1200, 20);
    sky = createSprite(10, 10, 2500, 20);

    restartButton = createSprite(250, 250, 50, 50);
    restartButton.visible = false;

    bird = createSprite(600, 300, 20, 20)
    bird.visible = false
    bird.addImage(birdImage);
    bird.scale = 0.2
    logGroup = new Group();

    
}

function draw() {

    distance = bird.y

       
    background(backgroundImg)

    if (bird.isTouching(logGroup)) {
        gameState = 2;
        
    }

    if (gameState === 2) {
        logGroup.destroyEach();
        textSize(30)
        fill("black")
        text("Game Over! Try again", 200, 200);
        restartButton.visible = true
        restartButton.addImage(restartImg);
        restartButton.scale = 0.1
        
    }

    if (mousePressedOver(restartButton)) {
        
        gameState === 1

    }

    if(keyDown(UP_ARROW)||keyDown("SPACE")){
        bird.velocityY -= 3;
      }
    bird.velocityY += 0.5
     
      if(keyWentDown(LEFT_ARROW)){
        bird.velocityX -= 5;
      }
      
      if(keyWentDown(RIGHT_ARROW)){
        bird.velocityX += 5;
      }
    
      if(keyWentUp(LEFT_ARROW)){
        bird.velocityX =0;
      }
      
      if(keyWentUp(RIGHT_ARROW)){
        bird.velocityX =0;
      }
    
    if (gameState === 0) {
        fill("black");
        textSize(50);
        text("! ᖴᒪYIᑎG ᗷIᖇᗪ GᗩᗰE !", 300, 200);
        textSize(45);
        text("ᵐᵃᵏᵉ ᵗʰᵉ ᵇⁱʳᵈ ʲᵘᵐᵖ ᵒᵛᵉʳ ᵒᵇˢᵗᵃᶜˡᵉˢ", 300, 250);
        text("ᵖʳᵉˢˢ ˢᵖᵃᶜᵉ ᵗᵒ ʲᵘᵐᵖ", 300, 290);
        text("ᵍᵒᵒᵈ ˡᵘᶜᵏ!!", 300, 330);
    }
    
   if(mousePressedOver(startButton)){
       birdsprite();
       bird.visible = true
       gameState = 1;
    }

    if (gameState === 1) {
        
        bird.collide(logGroup);
        log.visible = true;
        logMove();
        restartButton.visible = false;

    }
    bird.collide(ground);
    bird.collide(sky);
    

    drawSprites();
}
function birdsprite(){
  
    bird.visible=true
    bird.addImage(birdImage);
    bird.x = 400;
    bird.y = 530;
    bird.scale=0.1
    
    startButton.visible=false
}

function logMove() {
    if (frameCount % 20 === 0) {
        log = createSprite(10, Math.round(random(100, 1100)), 50, 50);
        log.addImage(logImage);
        log.scale = 0.3
        log.y = Math.round(random(10, 1200));
        log.velocityX = 4;
        logGroup.add(log)
        bird.collide(logGroup)
        
    }
}