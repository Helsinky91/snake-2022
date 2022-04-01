class SnakeCanvas{
    constructor(){
        this.canvas = null;
        this.ctx = null;
        
        this.snake = {w: null, h: null};
        
    }
   //should i make a CLASS for game?

draw(){
     //this should be in another class/js?
     ctx.rect(600, 100, 20, 20);
     ctx.fillStyle= "white";
     ctx.fill();    
     ctx.strokeStyle = "black";
     ctx.stroke();
}

 init (){

 }
}