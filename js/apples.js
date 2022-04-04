class Apples {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;
         this.x = Math.floor(Math.random()* (this.canvas.width));
         this.y = Math.floor(Math.random()* (this.canvas.height));
        this.width = 20;
        this.height = 20;
        this.x = null;
        this.y = null
    }

    draw(){
        this.ctx.fillStyle= "rgba(196, 41, 41)";
        //this.ctx.fillRect(this.x, this.y, this.width, this.height);   TO MAKE IT SQUARE
        this.ctx.fill();
        this.ctx.arc(this.x, this.y, 10, 0, 2 * Math.PI)
        ctx.lineWidth = 2;
        ctx.strokeStyle = "black";          
        ctx.stroke()
        //ctx.strokeRect(this.x, this.y, this.width, this.height);   TO MAKE OUTLINE OF SQUARE
    }

   /* randomApples(){
        this.x = Math.floor(Math.random()* (this.canvas.width));
        this.y = Math.floor(Math.random()* (this.canvas.height));
    }*/

    /* STEPS TO FOLLOW:

   OBSTACLES:
1. check recording x veure com fa el collision amb el obstacle
2. veure com genera nou random element

    WALLS:
1. com fa x entendre q ha choca amb la paret
2 com es fa x entedre q choca amb itself

    TRY AGIAN Button
1 why does not work
    */






    }


    