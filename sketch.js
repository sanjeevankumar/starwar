var bg
var bgImg
var ship1
var shipimg
var vil1
var vil1img
var vil2
var vil2img
var vil3
var vil3img
var bullet
var bulletimg
var vilgroup

function setup() {
  createCanvas(1000,600);
  bg = createSprite(900,400)
  bg.addImage(bgImg)

ship1 = createSprite(450,550,100,100)



ship1.addImage(shipimg)
ship1.scale=0.1
 

 }
 function preload() {
  shipimg = loadImage("assets/clipart214298.png")
  vil1img = loadImage("assets/clipart4337328.png")
  vil2img = loadImage("assets/clipart2186592.png")
  vil3img = loadImage("assets/clipart2908532.png")
  bulletimg= loadImage("assets/clipart16275.png")
  vilgroup= new Group()
  
   bgImg= loadImage("assets/background spacs.jpg")
    
  
  
   }
  
  
  function draw() {
  background(0)
   
  if(keyDown("LEFT_ARROW")){
  
      ship1.x=ship1.x - 100
      
    }
  
  
   if(keyDown("RIGHT_ARROW")){
  
      ship1.x=ship1.x + 100
      
    }
    
    if(keyDown( "space" ) ){
   bullet = createSprite(ship1.x,480,100,100)
   bullet.addImage(bulletimg)
   bullet.velocityY=-20
   bullet.scale=0.05
     }
  vil()
  if( vilgroup.isTouching(bullet))
     
   
  
  
  
  drawSprites();
  
  
  
  }
  
   function vil(){
    if(frameCount % 50===0){
      var x = Math.round(random(1,900))
      var vil=createSprite(x,165,10,40)
      vil.velocityY= 5
     var rand =Math.round (random(1,3))
  
     switch(rand){
       case 1 : vil.addImage(vil1img)
       vil.scale=0.3
       break ;
       case 2 : vil.addImage(vil2img)
       vil.scale=0.5
       break;
       case 3 : vil.addImage(vil3img)
       vil.scale=0.1
       break;
       default:break;
     }
     
     vil.lifetime=300
    vilgroup.add(vil)
  
    }
  }
  
   
   
    
    
  
  
  