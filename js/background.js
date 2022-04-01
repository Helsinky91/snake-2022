

// I THINK THIS IS NOT ACTUALLY NEEDED, ITS MESSING WITH MY HEAD


class Background {
    constructor(canvas, ctx){
        this.canvas = canvas;
        this.ctx = ctx;
        //this.image = null (to set up the background image, but i dont have)
        //this.moveSpeed= 3 (how fast the image moves=
        this.y = 0;
        this.init()
    }
 
 /*setCanvas(){
     this.canvas = document.getElementById('snake-canvas');
     this.ctx = canvas.getContext('2d');
 }*/
 init(){
     
 }

 draw() {}
 
 move () {
//this would be to move the road
 }

}




ctx.lineWidth = 10;
ctx.strokeStyle = 'rgba(38, 42, 38, 0.85)'
ctx.strokeRect((canvas.width / 2) - 400, 0, 800, 750)


ctx.fillText("SCORE:  ", 250, 400) //how do i change it's font