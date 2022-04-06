class Apples {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;
       // this.x = Math.floor(Math.random()* (this.canvas.width / 20));
    // this.y = Math.floor(Math.random()* (this.canvas.height) + 20);
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
        //this.ctx.fill();
        //this.ctx.arc(this.x, this.y, 10, 0, 2 * Math.PI) 
        ctx.lineWidth = 2;
        ctx.strokeStyle = "black";          
        //ctx.stroke()
ctx.strokeRect(this.x, this.y, this.width, this.height);  // TO MAKE OUTLINE OF SQUARE
        // DO I NEED IT HERE????

        ctx.closePath();
        
    }

    



    /* STEPS TO FOLLOW:

   OBSTACLES:
1. check recording x veure com fa el collision amb el obstacle
2. veure com genera nou random element

    WALLS:
2 com es fa x entedre q choca amb itself

    TRY AGIAN Button
1 why does not work
    */






    }


    