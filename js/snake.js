class Snake{
    constructor(canvas, ctx, x, y, width, height, game){
        this.canvas = canvas;
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.dx = 20; // direction of the X
        this.dy = 0 // direction of the Y
        this.width = width;
        this.height = height;
        this.bodyParts = [{x: 200, y: 100}, {x: 180, y: 100}, {x: 160, y: 100}];            
       
        this.drawSnake();
        this.game = game;
    }
  
    drawSnakeBodyParts(snakePart){    
        ctx.fillStyle= "white";
        ctx.fillRect(snakePart.x, snakePart.y, 20, 20);  
        ctx.lineWidth = 2;
        ctx.strokeStyle = "black";          
        ctx.strokeRect(snakePart.x, snakePart.y, 20, 20);

    }

    drawSnake(){
        this.bodyParts.forEach(this.drawSnakeBodyParts)
    }

    move(){
        const snakeHead = {x: this.bodyParts[0].x + this.dx, y: this.bodyParts[0].y +this.dy};
        this.bodyParts.unshift(snakeHead);
        this.bodyParts.pop() //add the tail (last elemtn of array) and push it up/rigth...
        if(snakeHead.x >= this.canvas.width) { //right wall
            this.game.gameOver();
        } else if(snakeHead.x <= 0) { //left wall
            this.game.gameOver();
        } else if(snakeHead.y >= this.canvas.height){ //bottom wall
            this.game.gameOver();
        } else if(snakeHead.y <= 0){ //top wall
            this.game.gameOver();
        } else if(snakeHead > this.bodyParts.length) { //itself? CURRENTLY NOT WORKING
            this.game.gameOver();
        }

    } 

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
