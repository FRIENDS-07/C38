class Player{

    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
    }

    getCount(){
        var playerRef = dataBase.ref('playerCount');
        playerRef.on("value",function(data){
            playerCount = data.val();
        })
    }

    updateCount(count){
        dataBase.ref('/').update({
            playerCount:count
        })
    }

    updateName(){
        var playerIndex = "Players/player" + this.index;
        dataBase.ref('playerIndex').set({
            Name:this.name,
            Distance:this.distance
        })
    }
    
    static getPlayerInfo(){
        var playerInfo = dataBase.ref('Players');
        playerInfo.on("value",(data)=>{
            allPlayers = data.val();
        })
    }

}