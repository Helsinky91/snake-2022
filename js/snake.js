class Snake{
    constructor(canvas, ctx, x, y, width, height){
        this.canvas = canvas;
        this.ctx = ctx;
       /* this.snakePosition = {x: positionX, y: positionY}
        this.snakeSize = {w: width, h: height}
        this.snakeSpeed = 4; */
        this.x = x;
        this.y = y;
        this.dx = 20; // direction of the X
        this.dy = 0 // direction of the Y
        this.width = width;
        this.height = height;
      /*  this.rightPressed = false
        this.leftPressed = false
        this.upPressed = false
        this.downPressed = false*/
        this.snake = [  {x: 200, y: 100},  
            {x: 180, y: 100},  
            {x: 160, y: 100}, 
           ];            
       
        this.drawSnake()
            }
  
    init (){
         }

    drawSnakeBodyParts(snakePart){    
        ctx.fillStyle= "white";
        ctx.fillRect(snakePart.x, snakePart.y, 20, 20);  
        ctx.lineWidth = 2;
        ctx.strokeStyle = "black";          
        ctx.strokeRect(snakePart.x, snakePart.y, 20, 20);

    }

    drawSnake(){
        this.snake.forEach(this.drawSnakeBodyParts)
    }

    move(){
        const snakeHead = {x: this.snake[0].x + this.dx, y: this.snake[0].y +this.dy};
        this.snake.unshift(snakeHead);
        this.snake.pop()
    } //add the tail (last elemtn of array) and push it up/rigth...

    moveLeft(){
        if(this.dx !== 20) { //20 is the snake size
            this.dx = -20;
            this.dy = 0; 
        }
    }
    moveRight(){
        if(this.dx !== -20){
            this.dx = 20;
            this.dy = 0;
        }
    }
    moveUp(){
        if(this.dy !== 20){
            this.dy = -20;
            this.dx = 0;
        }
    }
    moveDown(){
        if(this.dy !== -20){
            this.dy = 20;
            this.dx = 0;
        }
    }

}

//movement & colisions 
// new class to the body of the snake
// rewrite code of movement to add the tail (last elemtn of array) and push it up/rigth...
// dnt move left to right. 
