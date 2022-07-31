var player,moeda,fundo,playerimg;
var moedag,moedaimg;
var score = 0;
var obs,obsimg,obsg;
var gover,goverimg,reset,resetimg;



function preload(){
  fundo=loadImage("imagens/fundo.jpg");
  playerimg=loadImage("imagens/aviao.png");
  moedaimg=loadImage("imagens/moeda.png");
  obsimg=loadImage("imagens/obstaculo.png");
  goverimg=loadImage("imagens/gameOver.png");
  resetimg=loadImage("imagens/reset.png");

}
function setup() {
  createCanvas(900,400);
  player=createSprite(50,200,10,50)

 player.addImage(playerimg);
 player.scale=0.07;

  gover = createSprite(300,100,300,20);
  gover.addImage(goverimg);
  gover.scale=0.5
  gover.visible = false;
  
  reset = createSprite(300,140,300,20);
  reset.addImage(resetimg);
  reset.scale=0.5
  reset.visible = false;

 
  moedag=new Group()
  obsg=new Group()
}
function draw() {
  background(fundo); 
  text("PONTUAÇÃO:"+score,player.x,50)
  if(keyDown(UP_ARROW)){
    player.y=player.y-8;
  }
  if(keyDown(DOWN_ARROW)){
    player.y=player.y+8;
  }
  if(keyDown(RIGHT_ARROW)){
    player.x=player.x+8;
  }
  camera.position.x=player.x+width/2-100;
  gerarmoedas();
 
  
  if(moedag.isTouching(player)){
    score=score+3;
    
  }
  gerarobs();

  if(obsg.isTouching(player)){
    estadodejogo = "ENCERRAR";

    if(estadodejogo ==="ENCERRAR"){
  
      solo.velocityX = -0;
      moedag.setVelocityXEach(0);
      obsg.setVelocityXEach(0);
      moedag.setLifetimeEach(-1);
      obsg.setLifetimeEach(-1);
     
      //gover.visible = true;
      //reset.visible = true;
      //if(mousePressedOver(reset)){
      //reset();
      }
      
      
    }
  
drawSprites();
}


function gerarmoedas(){
  if(frameCount%60===0){
    moeda=createSprite(width,random(5,350),30,30);
    moeda.addImage(moedaimg);
    moeda.scale=0.09;
    moeda.velocityX=-9;
    moedag.add(moeda);
    
  }
}
function gerarobs(){
  if(frameCount%40===0){
    obs=createSprite(width,random(5,450),30,30);
    obs.addImage(obsimg);
    obs.scale=0.2;
    obs.velocityX=-17;
    obsg.add(obs);
    
  }
}

//function reset(){
   //estadodejogo="JOGAR";
 //reset.visible = false;
 //obsg.destroyEach();
 //moedag.destroyEach();
 //gover.visible = false;
 //reset.visible = false;
 //pontuacao=0;

 
 
//}
