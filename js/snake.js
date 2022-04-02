class Snake{
    constructor(canvas, ctx, positionX, positionY, width, height){
        this.canvas = canvas;
        this.ctx = ctx;
        this.snakePosition = {x: positionX, y: positionY}
        this.snakeSize = {w: width, h: height}
        this.snakeSpeed = 5;
        this.snake = null             
        this.direction = "right" //the direction should start to the right

        this.draw()
            }
  
    init (){
         }

    draw(){    
        //head
        // body
        ctx.fillStyle= "white";
        ctx.fillRect(this.snakePosition.x, this.snakePosition.y, 20, 20);  
        ctx.lineWidth = 2;
        ctx.strokeStyle = "black";          
        ctx.stroke();

    }

    move(){
        if(this.direction == "right") {
            this.moveRight();
        } else if(this.direction == "left"){
            this.moveLeft();
        } else if(this.direction == "up"){
            this.moveUp();
        } else if(this.direction == "down") {
            this.moveDown();
        } 
    }

    moveRight(){
        if (this.snakePosition.x < this.canvas.width - this.snakeSize.w) {
            this.snakePosition.x += this.snakeSpeed
            console.log("move right")
        } else if (this.snakePosition.x === this.canvas.width - 1) {
            console.log("dead")
            //DEAD
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
            this.snakePosition.y += this.snakeSpeed 
           
        console.log("move up")
        }
    }
    moveDown(){
        if(this.snakePosition.y > this.canvas.height - this.snakeSize.h){
          this.snakePosition.y += this.snakeSpeed 
           
            console.log("move down")
    } else if (this.snakePosition.y === this.canvas.height) {
        console.log("dead")
        //DEAD
    } 
     
    }
}

//movement & colisions 
// new class to the body of the snake
// rewrite code of movement to add the tail (last elemtn of array) and push it up/rigth...
// dnt move left to right. 
