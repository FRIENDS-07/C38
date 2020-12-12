class Game{

    constructor(){
        
    }

    getState(){
        var gamestateRef = dataBase.ref('Gamestate');
        gamestateRef.on("value",function(data){
            gameState = data.val();
        })
    }

    updateState(state){
        dataBase.ref('/').update({
            Gamestate:state
        });
    }

    async startState(){
        if(gameState === 0){

            player = new Player();
            var playerCountRef = dataBase.ref('playerCount').once("value");

            if(playerCountRef.exists){
                playerCount = playerCountRef.val();
                player.getCount();
            }

            form = new Form();
            form.display();
        }
    }

    playState(){

        form.hide();
        textSize(25);
        text("Get Ready to Begin!!!",680,350);
        Player.getPlayerInfo();

        if(allPlayers !== undefined){

            var y = 400;

            for(var plr in allPlayers){
                if(plr === "Player" + player.index){
                    fill("red");
                }else{
                    fill("black");
                }
            }
            
            y = y + 30;
            textSize(10);
            text(allPlayers[plr].name + ": " + allPlayers[plr].distance,750,y);
        }

        if(keyDown(UP_ARROW) && player.index !== null){
            distance = distance + 10;
            player.updateName();
        }

    }

}
