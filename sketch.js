var girlImg, girl;
var wall, wall2, wall3, wall4, wall5, wall6, wall7,wall8, wall9 , wall10;
var dWall;
var BgImage, brickV, brickR

function preload(){
  girlImg = loadImage("Images/girlBack.png")
  bgImg = loadImage("Images/bgImg.jpg")
  girlL = loadImage("Images/girlL.png")
  girlF = loadImage ("Images/girlFront.png")
  girlB = loadImage ("Images/girlBack.png")
  girlR = loadImage("Images/girlR.png")
  BgImage = loadImage("Images/bgMaze.jpg")
  brickV = loadImage("Images/brickR2.png")


}
function setup() {
  createCanvas(displayWidth,displayHeight);
  girl = createSprite(50,height-40, 50, 200);
  girl.addImage("girl", girlImg);
  girl.scale = 0.3;
  girl.addImage("girlL",girlL)
  girl.addImage("girlR",girlR)
  girl.addImage("girlB", girlB)
  girl.addImage("girlF", girlF)
  
  





  fill("brown")
  wall = createSprite(width-width + 10, height-100, 20, 200);
  dWall = new BrickWall(width-width + 10, height-100, 10, 100, 20, 15, 40, "vertical");
  wall2 = createSprite(width-width + 40, height-200, 10, 100, 20, 15, 40, "horizontal");
  wall3 = createSprite(70, height-300, 20,200);
  wall4 = createSprite(150, height-450, 20, 300);
  wall5 = createSprite(120, height-600, 190 , 20);
  wall6 = createSprite(220, height - 670, 20, 300)
  wall7 = createSprite(270, height - 100, 200, 20)
  wall8 = createSprite(350, height - 730, 20, 290)
  wall9 = createSprite(350, height - 200, 260, 20)
  wall10 = createSprite(450, height - 230, 200, 20)
  wall11= createSprite(300, height - 330, 20, 150)
  wall12= createSprite(500, height - 500, 250, 20)
  wall13= createSprite(610, height - 950, 20, 20)
  wall14= createSprite(690, height - 990, 300, 20)
  wall15= createSprite(width/2, height-50, 20, 90)
  wall16= createSprite(150, height - 50, 20, 90)
  wall17= createSprite(130, height - 100, 20, 90)
  wall18= createSprite(230, height - 300, 20, 90)
  wall19= createSprite(700, height - 750, 20, 90)
  wall20= createSprite(500, height - 1550, 20, 90)
  /*wall21= createSprite(100, height - 50, 20, 90)
  wall22= createSprite(100, height - 50, 20, 90)
  wall23= createSprite(100, height - 50, 20, 90)
  wall24= createSprite(100, height - 50, 20, 90)
  wall25= createSprite(100, height - 50, 20, 90)
  wall26= createSprite(100, height - 50, 20, 90)
  wall27= createSprite(100, height - 50, 20, 90)
  wall28 = createSprite(100, height - 50, 20, 90)
  wall29= createSprite(100, height - 50, 20, 90)
  wall30= createSprite(100, height - 50, 20, 90)*/



}

function draw() {
  background(BgImage)


  if (keyDown("LEFT_ARROW")){
    girl.x=girl.x-5;
    girl.changeImage("girlL",girlL)
    //irl.rotation = 270;
    girl.rotateToDirection = true;
    console.log(girl.getDirection())

  }

  if(keyDown("RIGHT_ARROW")){
    girl.x=girl.x+5
    girl.changeImage("girlR",girlR)
    //girl.roation = 90;
  }

  if(keyDown("UP_ARROW")){
    girl.y=girl.y-5
    girl.changeImage("girlB", girlB)
    
  }

  if(keyDown("DOWN_ARROW")){
    girl.y=girl.y+5
    girl.changeImage("girlF", girlF)

  }
  drawSprites();
  dWall.display();
}