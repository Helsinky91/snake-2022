
const canvas = document.getElementById('canvas');
canvas.width = 800;
canvas.height = 600;
const ctx = canvas.getContext('2d');

const instructions = document.getElementById("instructions");
const gameBoard = document.getElementById("game-board");
const gameOver = document.getElementById("game-over");

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
        this.snake = new Snake(canvas, ctx, 50, 50, 50, 50);
        this.createEventListeners();
        this.apples = new Apples(ctx, canvas);
        this.update();
        gameBoard.classList.remove("hidden");
        instructions.classList.add("hidden")
    }

    update() {
        setInterval(() => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            this.drawWalls();
            this.snake.draw();
            this.snake.move();
        }, 1000 / 30)
    }

    createEventListeners() {
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
                    break;
                case "ArrowDown":
                    e.preventDefault();
                    this.snake.direction = "down"
                    break;
                default:
                    break;
            }
        })
        /*  document.addEventListener('keyup', (e) => {
              switch (e.key) {
                  case "ArrowLeft" :
                      
                      break;
                  case "ArrowRight" :
                     
                      break;
                  case "ArrowUp" :
                     
                      break;
                  case "ArrowDown" :
                      
                      break;
                  default:
                      break;
              }
          })*/
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
