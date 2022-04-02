class Apples {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.x = Math.floor(Math.random()* (this.canvas.width / 2));
        this.y = Math.floor(Math.random()* (this.canvas.height / 2));
        this.width = 20;
        this.height = 20;
        
    }

    draw(){
        this.ctx.fillStyle= "red";
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.lineWidth = 2;
        ctx.strokeStyle = "black";          
        ctx.stroke();
    }

    }
