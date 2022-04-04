

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const instructions = document.getElementById("instructions");
const gameBoard = document.getElementById("game-board");
const gameOver = document.getElementById("game-over");
window.onload = instructions.classList.remove("hidden");

document.getElementById('start-button').addEventListener('click', () => myGame.startGame());

class Game {
    constructor() {
        this.snake = null;
        this.apples = null
    }

    drawWalls() {
        ctx.lineWidth = 10;
        ctx.strokeStyle = 'rgba(38, 42, 38, 0.85)'
        ctx.strokeRect(0, 0, canvas.width, canvas.height)
    }

    startGame() {
        console.log("click");
        gameBoard.classList.remove("hidden");
        instructions.classList.add("hidden")
        this.snake = new Snake(canvas, ctx, 50, 50, 50, 50);
        this.createEventListeners();
        this.apples = new Apples(ctx, canvas);
        this.update();
        
    }

    update() {
        setInterval(() => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            this.drawWalls();
            this.snake.move();
            this.snake.drawSnake();
            this.apples.draw();
           // this.colisions()
        }, 100)
    }

    createEventListeners() {
        document.addEventListener('keydown', (e) => {
            switch (e.key) {
                case "ArrowLeft":
                    e.preventDefault();
                    this.snake.moveLeft()
                    break;
                case "ArrowRight":
                    e.preventDefault();
                    this.snake.moveRight()
                    break;
                case "ArrowUp":
                    e.preventDefault();
                    this.snake.moveUp()
                    break;
                case "ArrowDown":
                    e.preventDefault();
                    this.snake.moveDown()
                    break;
                default:
                    break;
            }
        })
    }

    colisions(){ 
        //THIS IS NOT WORKINGGGGG
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
    
   hasEatten(){ 
        
    }

    gameOver() {
        gameBoard.classList.add("hidden")
        gameOver.classList.remove("hidden")
    }

}




const myGame = new Game();





/*
function createPlayer() {
  const snake = new SnakeCanvas(this.ctx, 50, 50, 50, 50)

} */
