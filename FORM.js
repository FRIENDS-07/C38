class Form{

    constructor(){
        this.input = createInput("Name ");
        this.button = createButton("Next");
        this.greeting = createElement('h4');
    }

    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
    }

    display(){

        var title = createElement('h2');
        title.html("Car Racing Game 2.0");
        title.position(600,100);

        this.input.position(630,300);
        this.button.position(750,340);

        this.button.mousePressed(()=>{

            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount++;
            player.index = playerCount;
            player.updateName();
            player.updateCount(playerCount);

            this.greeting.html("Hi! " + player.name);
            this.greeting.position(680,350);

        })

    }

}