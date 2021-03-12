class Game{
    constructor(){

    }
    getState(){
        var gamestateRef=database.ref('gamestate')
        gamestateRef.on("value",(data)=>{
            gamestate=data.val();
        })    
    }
    update(state){
database.ref('/').update({
    gamestate:state
})
    }

    async start(){
        if(gamestate==0){
            player=new Player();
            var playerCountRef= await database.ref('playerCount').once("value");
            if (playerCountRef.exists()){
                playerCount=playerCountRef.val();
                player.getCount();
            }
            firstPage= new FirstPage();
            firstPage.display();
        }
      
        car1= createSprite(100,200);
        car1.addImage(car1img);
        car2= createSprite(300,200);
        car2.addImage(car2img);
        car3= createSprite(500,200);
        car3.addImage(car3img);
        car4= createSprite(700,200);
        car4.addImage(car4img);
        cars=[car1,car2,car3,car4]
      
    }
    play(){
        firstPage.hide();
        Player.getPlayerInfo();
        player.carsAtEnd();
        if(allPlayers!= undefined){
            background("lime");
            image(trackImg,0,-displayHeight*4,displayWidth,displayHeight*5);
            var index=0;
            var x= 100;
            var y;
            for (var i in allPlayers){
                index=index+1;
                x=x+200;
                y=displayHeight-allPlayers[i].distance;
                cars[index-1].x=x;
                cars[index-1].y=y;
                if(index==player.index){
                    camera.position.x=displayWidth/2;
                    camera.position.y=cars[index-1].y
                }
            }
        }
        if(keyIsDown(UP_ARROW)&& player.index != null){
         player.distance= player.distance+20;
         player.update();
        }
        if(player.distance >= 3500){
            gamestate=2;
            player.rank=player.rank+1;
            Player.updateCarsAtEnd(player.rank);
        }
        drawSprites();
    }
    
    end(){
        console.log("Game Has Ended");
        console.log(player.rank)
    }
    
}
