var bow , arrow,  background;
var bowImage, arrowImage, green_BalloonImage, red_BalloonImage, pink_BalloonImage ,blue_BalloonImage, backgroundImage;
var redBalloon, blueBalloon, greenBalloon, pinkBalloon; 
  function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_BalloonImage = loadImage("red_balloon0.png");
  blue_BalloonImage = loadImage("blue_balloon0.png");
  green_BalloonImage = loadImage("green_balloon0.png");
  pink_BalloonImage = loadImage("pink_balloon0.png");

}


  function setup() {
  createCanvas(400, 400);
  
  //criar um plano de fundo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // criar um arco para a flecha
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
}

  function draw() {
  background(0);
  // mover o chão
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //mover o arco
  bow.y = World.mouseY
  
   // soltar a flecha quando a tecla espaço for pressionada
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //mude o valor do balão aleatório para 4
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
   switch(select_balloon){
    //chamar o balãovermelho
    case 1:redBalloon();
    break;
    //chamar o balãoazul
    case 2:blueBalloon();
    break;
    //chamar o balãoverde
    case 3:greenBalloon();
    break;
    //chamar o balãorosa
    case 4:pinkBalloon();
    break;
  default: break;
  }
}
  
  drawSprites();
}


// criar flechas para o arco
  function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}


  function redBalloon() {
  var redballoon = createSprite(0,Math.round(random(20, 370)), 10, 10);
  redballoon.addImage(red_BalloonImage);
  redballoon.velocityX = 3;
  redballoon.lifetime = 150;
  redballoon.scale = 0.1;

}

  function blueBalloon() {
  //crieSprite para o balão 
  var blueballoon = createSprite(0,Math.round(random(20, 370)),10, 10);
  //adicioneImagem para o balão
  blueballoon.addImage(blue_BalloonImage);
  //adicione velocidade para fazer o balão se mover
  blueballoon.velocityX = 3;
  //mudar a dimensão do balão
  blueballoon.scale = 0.1;
  //atribua tempo de vida ao balão
  blueballoon.lifetime = 150;
}
  function greenBalloon() {
  //crieSprite para o balão
  greenballoon = createSprite(0,Math.round(random(20, 370)),10, 10);
  //adicioneImagem para o balão
  greenballoon.addImage(green_BalloonImage);
  //adicione velocidade para fazer o balão se mover
  greenballoon.velocityX = 3;
  //mudar a dimensão do balão
  greenballoon.scale = 0.1;
  //atribua tempo de vida ao balão
  greenballoon.lifetime = 150;
}

  function pinkBalloon() {
  //crieSprite para o balão
  pinkballoon = createSprite(0,Math.round(random(20, 370)),10, 10);
  //adicioneImagem para o balão
  pinkballoon.addImage(pink_BalloonImage)
  //adicione velocidade para fazer o balão se mover
  pinkballoon.velocityX = 3;
  //mudar a dimensão do balão
  pinkballoon.scale = 0.1
  //atribua tempo de vida ao balão
  pinkballoon.lifetime = 150;
}
