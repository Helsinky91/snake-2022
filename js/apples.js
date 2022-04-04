class Apples {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.x = Math.floor(Math.random()* (this.canvas.width));
        this.y = Math.floor(Math.random()* (this.canvas.height));
        this.width = 20;
        this.height = 20;
        
    }

    draw(){
        this.ctx.fillStyle= "rgba(196, 41, 41)";
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.lineWidth = 2;
        ctx.strokeStyle = "rgba(63, 126, 67)";          
        ctx.strokeRect(this.x, this.y, this.width, this.height);
    }


    }


    