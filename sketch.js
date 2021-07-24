var form, player, game, database,gameState,playerCount,allPlayers;
var jet1,jet2,jetimg1,jetimg2,bckgimage;
var x1 = 300,y1 = 200,x2 = 600,y2 = 200;
var r1 = 0, r2 = 0;

function preload(){

jetimg1 = loadImage("images/jet1.png");
jetimg2 = loadImage("images/jet2.png")
}

function setup() {
  createCanvas(800,400);
  database = firebase.database();
  gameState = 0;

  game = new Game();
  game.start();

  game.getState()

}

function draw() {
  background(255,255,255); 

  player.getCount();
  game.getState();


 // console.log(playerCount)
  
  if(playerCount === 2){
     game.updateState(1)
  }

  if(gameState=== 1){
    game.play();
    jet1.x = x1;
    jet1.y = y1;
    jet2.x = x2;
    jet2.y = y2;
    angleMode(DEGREES)
    jet1.rotation = r1;
    jet2.rotation = r2;
    
  }
  
  
}