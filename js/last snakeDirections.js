//in index.js 
function createEventListeners() {
    document.addEventListener('keydown', (e) => {
        switch (e.key) {
            case "ArrowLeft":
                e.preventDefault();
                this.snake.direction = "left"
                break;
            case "ArrowRight":
                e.preventDefault();
                this.snake.direction = "right"
                break;
            case "ArrowUp":
                e.preventDefault();
                this.snake.direction = "up"
                console.log("Up")
                break;
            case "ArrowDown":
                e.preventDefault();
                this.snake.direction = "down"
                break;
            default:
                break;
        }
    })
}

update() {
    setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.drawWalls();
        this.snake.draw();
        this.snake.move();
    }, 1000 / 30)
}

//in snakes.js
function constructor(canvas, ctx, positionX, positionY, width, height){
    this.canvas = canvas;
    this.ctx = ctx;
    this.snakePosition = {x: positionX, y: positionY}
    this.snakeSize = {w: width, h: height}
    this.snakeSpeed = 4;
    this.snake = null             
    this.direction = "right" //the direction should start to the right

    this.draw()
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
    if (this.snakePosition.x < this.canvas.width - (this.snakeSize.w/2)) {
        this.snakePosition.x += this.snakeSpeed
        console.log("move right")
    } else if (this.snakePosition.x === this.canvas.width - 1) {
        console.log("dead")
        //DEAD
    } 
}

//let clampedX = Math.min(Math.max(x, 0), this.canvasWidth);
//let clampedY = Math.min(Math.max(y, 0), canvasHeight);

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
        this.snakePosition.y -= this.snakeSpeed 
       
    console.log("move up")
    }
}
moveDown(){
    if(this.snakePosition.y > this.canvas.height - (this.snakeSize.h/2)){
      this.snakePosition.y += this.snakeSpeed 
       
        console.log("move down")
    } else if (this.snakePosition.y === this.canvas.height) {
    console.log("dead")
    //DEAD
    } 
}

function drawSnake(){
    ctx.fillStyle= "white";
        ctx.fillRect(this.x, this.y, 20, 20);  
        ctx.lineWidth = 2;
        ctx.strokeStyle = "black";          
        ctx.stroke();
}

function drawWalls() {
    ctx.lineWidth = 10;
    ctx.strokeStyle = 'rgba(38, 42, 38, 0.85)'
    ctx.strokeRect(400, 0, canvas.width -400, canvas.height)
}


colisions(){ //THIS IS NOT WORKINGGGGG
    for(let i=2; i<this.snake.length; i++) {
      if(this.snake[i].x === this.snake[0].x && this.snake[i].y === this.snake[0].y){
          return true
      }
    } 
    const leftWall = this.snake[0].x < 0;
    const rightWall = this.snake[0].x > canvas.width - 20;
    const topWall = this.snake[0].y < 0;
    const bottomWall = this.snake[0].y > canvas.height - 20; 

   return leftWall || rightWall || topWall || bottomWall
}

hasEatten(){ //THIS IS NOT WORKING EITHERRRRRRR
    if (snake[0].x < this.apples.x + 20 && 
        this.snake[0].x +20 > this.apples.x && 
        this.snake[0].y < this.apples.y + 20 && 
        this.snake[0].y +20 > this.apples.y){
          return  score += 10
            console.log("ñam")
    } 
    this.snake.push(
        {x: this.snake[this.snake.length -1].x, 
         y: this.snake[this.snake.length -1].y});
    this.apples.draw();
}