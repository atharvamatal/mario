const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


//making variable
var Start,startImage;
var mario,marioImage
var bgImage;
var template,templateImage;
var mario,marioImage;
var bg="photos/bg1.png"
var bg2,bg2Image
var airoplane,airoplaneImage;
var marioImage,mario;
var gameState="bigin";
var wallImage,wall;
var ballImage;
var ballGroup;
var ball;
var over,overImage

function preload()
 {
     //loading image
    bgImage=loadImage(bg);

    startImage=loadImage("photos/start.png")
    
    templateImage=loadImage("photos/template.png");

    marioImage=loadImage("photos/mario.png")
  
    bg2Image=loadImage("photos/bg2.png");

    marioImage=loadImage("photos/mario.png")

    overImage=loadImage("photos/over.png")
    
   

  

    ballImage=loadImage("photos/ball.png")
}
function setup()
{
    //creating canvas
    var canvas = createCanvas(1230,500);
   
     engine = Engine.create();

    world = engine.world;
//created ballGroup
    ballGroup=createGroup();
//made the objects and added the animation to objects
    Start=createSprite(560,400,10,10);
    Start.addImage(startImage);

    template=createSprite(550,100,10,40);
    template.addImage(templateImage);

  
    mario=createSprite(100,450,68,78);
    mario.addImage(marioImage);

   over=createSprite(550,300,10,10)
   over.addImage(overImage)
   

}

function draw(){
    spawnBall();
    //in game whatever should be in game bigining will be added here
if(gameState==="bigin"){
 background(bgImage) ;
over.scale=3
mario.visible=false
 template.visible=true
 Start.visible=true
 mario.scale=4
over.visible=false
Start.scale=0.33
template.scale=0.6


 if(mousePressedOver(Start)&& gameState==="bigin"){
     gameState="play" 
     }
     }
    
 //in game whatever should be in game will be added here
    if(gameState==="play"){
        var TIME=120
        background(bg2Image);
        mario.visible=true
       over.visible=false
       template.visible=false
        Start.visible=false
        
       
        
        if(keyCode=== 37){
            mario.x=mario.x-4
        }
        if(keyCode=== 39){
            mario.x=mario.x+4

        }
       
        
    }

    if(mario.isTouching(ballGroup)&& gameState==="play"){
       
      gameState="end"
    }
    //in game whatever should be in game ending will be added here
  if(gameState==="end"){
      ballGroup.destroyEach();
     
      over.visible=true
     
      textSize (30)
      stroke ("black")
      text("press'R'to restart",450,150,)
     
     keyPreesed();
  }
  
    Engine.update(engine);
   
     
    
   drawSprites();
   
    }  

//for spawning the balls
function spawnBall(){
 if(gameState==="play")  {
if(frameCount %40===0){
   ball=createSprite(300,-10,101,19)
   ball.x = Math.round(random(0,1000));
    ball.addImage(ballImage);
    ball.scale = 0.2;
   ball.velocityY = +5;
   ballGroup.add(ball)
    ball.lifetime=200
}

}

}
function keyPreesed(){///
    if(keyCode===82){
gameState="bigin"
    }
}

