var database,firstPage,game,player,allPlayers,car1,car2,car3,car4,cars;

var playerCount=gamestate=distance=0;
function preload(){
  car1img=loadImage("images/car1.png");
  car2img=loadImage("images/car2.png");
  car3img=loadImage("images/car3.png");
  car4img=loadImage("images/car4.png");
  groundImg=loadImage("images/ground.png");
  trackImg=loadImage("images/track.jpg");
}
function setup(){
    createCanvas(displayWidth,displayHeight);
    database= firebase.database();
  game= new Game;
  game.getState();
  game.start();
}

function draw(){
    background("white");
   if(playerCount==4){
     game.update(1);
   }
   if(gamestate==1){
     clear();
     game.play();
   }
   if(gamestate==2){
     clear();
     game.end();
   }
}

