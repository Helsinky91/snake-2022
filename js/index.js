
const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

ctx.lineWidth = 10;
ctx.strokeStyle = 'rgba(38, 42, 38, 0.85)'
ctx.strokeRect((canvas.width / 2) - 400, 0, 800, 750)

document.getElementById('start-button').addEventListener('click', () =>myGame.startGame());
class Game {
  constructor () {
      this.snake = null;
      this.apples = null
  }

  startGame() {
    console.log("click");
    this.snake = new Snake(this.ctx, 50, 50, 50, 50);
    this.createEventListeners();
    //this.apples = new Apples();
}

    createEventListeners(){
        document.addEventListener('keydown', (e) => {
            switch (e.key) {
                case "ArrowLeft" :
                    this.snake.moveLeft()
                    break;
                case "ArrowRight" :
                    this.snake.moveRight()
                    break;
                case "ArrowUp" :
                    this.snake.moveUp()
                    break;
                case "ArrowDown" :
                    this.snake.moveDown()
                    break;
            }
        })
}
  }

const myGame = new Game();




 


/*
function createPlayer() {
  const snake = new SnakeCanvas(this.ctx, 50, 50, 50, 50)

} */
