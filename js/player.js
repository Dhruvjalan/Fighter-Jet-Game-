class Player{
    constructor(){
        this.name = null;
        this.score = 0;
        this.distance = 0;
        this.index  = null;
        this.x = 300;
        this.y = 200;
        this.rotate = 0;
    }

    updatePos(posx,posy,angle){
      database.ref("players/player"+this.index).update({
        xpos : posx,
        ypos : posy,
        rotate: angle
      }) 
    }
      
      getPos(){
        database.ref("players/player1/xpos").on("value",(data)=>{
          x1 = data.val();
        })
        database.ref("players/player1/ypos").on("value",(data)=>{
          y1 = data.val();
        })
        database.ref("players/player2/xpos").on("value",(data)=>{
          x2 = data.val() + 300;
        })
        database.ref("players/player2/ypos").on("value",(data)=>{
          y2 = data.val();
        })
        database.ref("players/player1/rotate").on("value",(data)=>{
          r1 = data.val();
        })
        database.ref("players/player2/rotate").on("value",(data)=>{
          r2 = data.val();
        })

      }
    
  
    updateCount(value){
      database.ref("/").update({
        playerCount: value
      })
    }

    getCount(){
      database.ref("playerCount").once("value",(data)=>{
      playerCount = data.val();
      })
    }

    setPlayerChild(){
      database.ref("players/player"+this.index).set({
        name: this.name,
        score: this.score,
        distance: this.distance,
        xpos: this.x,
        ypos: this.y,
        rotate: this.rotate,
      })

    
    }

    static information(){
      database.ref("players").on("value",(data)=>{
        allPlayers = data.val();
      })
    }
  }