export class Door{
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    animate(ctx){
        const x = ((this.x) * 8.5 + (this.x + this.width) * 1.5) / 10;
        const y = ((this.y) + (this.y + this.height)) / 2;
        const radius = this.width / 12;
    
        ctx.fillStyle = "#000";
        ctx.fillRect(this.x, this.y, this.width, this.height);
        
        ctx.fillStyle = "#4aac96";
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2 );
        ctx.fill();
       
    }


}