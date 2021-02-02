export class Door{
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.scale = 1;
        this.click = false;
        this.answer = false;

    }

    animate(ctx){
        //const x = ((this.x) * 8.5 + (this.x + this.width) * 1.5) / 10;
        const x = -((this.width) * 8.5) / 10;
        const y = ((this.height)) / 2;
        const radius = this.width / 12;
        

        ctx.save();
        ctx.translate(this.x + this.width, this.y);
        ctx.fillStyle = "#000";
        ctx.fillRect(-this.width, 0, this.width, this.height);
        ctx.fillStyle = "#4aac96";
        ctx.fillRect(-this.width + 5, 5, this.width - 5, this.height - 10);
        
        ctx.restore();              
        
        if(this.answer){
        ctx.fillStyle = "#000";
        ctx.beginPath();
        ctx.arc(this.x + this.width / 2, this.y + this.height / 2, this.width / 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
            
        }
        
        ctx.save();        
        ctx.translate(this.x + this.width, this.y);

        if(this.click){
            if(this.scale > -1){
                this.scale -= 0.03;            
            }
            ctx.scale(this.scale ,1);
        }else{
            if(this.scale < 1){
                this.scale += 0.03;            
            }
            ctx.scale(this.scale ,1);
        }

        ctx.fillStyle = "#000";
        ctx.fillRect(-this.width, 0, this.width, this.height);
        
        ctx.fillStyle = "#4aac96";
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2 );
        ctx.fill();
        ctx.restore(); 
    }

    animate_click(ctx){
        const x = -((this.width) * 8.5) / 10;
        const y = ((this.height)) / 2;
        const radius = this.width / 12;

        if(this.scale > -1){
            this.scale -= 0.03;            
        }

        ctx.save();
        ctx.translate(this.x + this.width, this.y);
        ctx.fillStyle = "#000";
        ctx.fillRect(-this.width, 0, this.width, this.height);
        ctx.fillStyle = "#4aac96";
        ctx.fillRect(-this.width + 5, 5, this.width - 5, this.height - 10);
        ctx.restore();              
        
        ctx.save();        
        ctx.setTransform(1,0,0,1,0,0);
        ctx.translate(this.x + this.width, this.y);
        ctx.scale(this.scale ,1);
        ctx.fillStyle = "#000";
        ctx.fillRect(-this.width, 0, this.width, this.height);
        
        ctx.fillStyle = "#4aac96";
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2 );
        ctx.fill();
        ctx.restore();  
    }


}