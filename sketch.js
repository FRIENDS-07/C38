var dataBase,gameState=0;
var player,form,game,playerCount=0;
var allPlayers;

function setup(){

    createCanvas(700,600)

    dataBase = firebase.database();

    game = new Game();
    game.getState();
    game.startState();

}

function draw(){

    background("lavender");

    if(playerCount === 4){
        game.updateState(1);
    }

    if(gameState === 1){
        clear();
        game.playState();
    }

}
