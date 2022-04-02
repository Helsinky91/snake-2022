class Snake{
    constructor(canvas, ctx, positionX, positionY, width, height){
        this.canvas = canvas;
        this.ctx = ctx;
        this.snakePosition = {x: positionX, y: positionY}
        this.snakeSize = {w: width, h: height}
        this.snakeSpeed = 2;
        this.snake = null             
        this.draw()
        
    }
  
    init (){
        
    }

    draw(){    
        //head


        // body
        ctx.rect(600, 100, 20, 20);
        ctx.fillStyle= "white";
        ctx.fill();    
        ctx.lineWidth = 2;
        ctx.strokeStyle = "black";          
        ctx.stroke();

    }

    moveRight(){
        if (this.snakePosition.x < this.canvas) {
        this.snakePosition.x += this.snakeSpeed
        console.log("moveright")
        } 
    }
    
    moveLeft(){
        if (this.snakePosition.x > 0) {
        this.snakePosition.x -= this.snakeSpeed
        console.log("move left")
        } else if (this.snakePosition.x === 0) {
            console.log("dead")
            //DEAD
    }}

    moveUp(){
        if(this.snakePosition.y < 0){
        this.snakePosition.y -= this.snakeSpeed //NOT SURE
        console.log("move up")
        }
    }
    moveDown(){
        this.snakePosition.y -= this.snakeSpeed //NOT SURE
        console.log("move down")
    }
}

//movement & colisions 