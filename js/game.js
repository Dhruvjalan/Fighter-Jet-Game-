class Game{
    constructor(){
        
    }

    getState(){
      database.ref("gameState").once("value",(data)=>{
      gameState = data.val();
      })
    }

    updateState(value){
      database.ref("/").update({
        gameState: value
      })
    }

    async start(){
     if(gameState === 0){
       player = new Player();

       var playerRef = await database.ref("playerCount").once("value")

       if(playerRef.exists()){
          playerCount = playerRef.val();
          player.getCount()
       }

       form = new Form();
       form.display();
     } 
     jet1 = createSprite(x1,y1,50,50);
     jet1.addImage(jetimg1)
     jet2 = createSprite(x2,y2,50,50);
     jet2.addImage(jetimg2);
     allPlayers = [jet1,jet2];

    }

    play(){

      form.hide();
      Player.information();
      drawSprites();
      player.getPos()

      if(allPlayers!== undefined){
        //background(bckgimage)
        var index = 0;
        var x = 300;
        var y = 200;
        for(var plr in allPlayers){
          index+=1;
          x = allPlayers[plr].xpos
          y = allPlayers[plr].ypos

         // allPlayers[index-1].x = x;
         // allPlayers[index-1].y = y;


        }
        if(keyDown(UP_ARROW) && player.index!==null){
          player.y-=5;
          player.updatePos(player.x,player.y,player.rotate);

          if(keyDown('r')){
            player.rotate = 0;
            player.updatePos(player.x,player.y,player.rotate);

          }
          
         
          
       }if(keyDown(DOWN_ARROW)&& player.index!==null){
        player.y+=5;
        player.updatePos(player.x,player.y,player.rotate);
        if(keyDown('r')){
          player.rotate = 180;
          player.updatePos(player.x,player.y,player.rotate);

        }


     }if(keyDown(LEFT_ARROW)&& player.index!==null){
      player.x-=5;
      player.updatePos(player.x,player.y,player.rotate);
      console.log("left");
      if(keyDown('r')){
        player.rotate = 270;
        player.updatePos(player.x,player.y,player.rotate);

      }


   }if(keyDown(RIGHT_ARROW)&& player.index!==null){
      player.x+=5;
      player.updatePos(player.x,player.y,player.rotate);

      if(keyDown('r')){
        player.rotate = 90
        player.updatePos(player.x,player.y,player.rotate);

      }


 }

     

      }

    }
  
  }