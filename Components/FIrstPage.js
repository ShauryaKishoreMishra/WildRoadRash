class FirstPage{
    constructor(){
        this.title= createElement('h1');
        this.title.html('Wild Road Rash');
        this.input= createInput('Name:');
        this.button= createButton('Play');
        this.greeting= createElement('h2');
        this.reset= createButton('Reset');
    }
    hide(){
        this.title.hide();
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
     display(){
         this.title.position(500,100)
         this.input.position(500,200)
         this.button.position(550,300)
         this.reset.position(650,400);
         this.reset.mousePressed(()=>{
           player.updateCount(0);
           game.update(0);
         })
         this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name= this.input.value();
        playerCount=playerCount+1;
        player.index=playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello "+ player.name);
        this.greeting.position(500,200)
         })
     }
   
    }

