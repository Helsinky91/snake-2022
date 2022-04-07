class Apples {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.width = 20;
        this.height = 20;
        this.x = 0;
        this.y = 0
        this.randomApples(); 
    }

    randomApples(){
        let maxX = (this.canvas.width/20) ;
        let maxY = (this.canvas.height/20) ;
        this.x = 20 * (Math.floor(Math.random() * maxX))
        this.y = 20 * (Math.floor(Math.random() * maxY));
    }
 
    draw(){
        this.ctx.fillStyle= "rgba(196, 41, 41)";
        this.ctx.fillRect(this.x, this.y, this.width, this.height);  // TO MAKE IT SQUARE
        ctx.lineWidth = 2;
        ctx.strokeStyle = "black";          
        ctx.strokeRect(this.x, this.y, this.width, this.height);  // TO MAKE OUTLINE OF SQUARE
        ctx.closePath();
    }
}


    