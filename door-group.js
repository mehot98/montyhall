import {Door} from "./door.js";

export class DoorGroup{
    constructor(ctx, stageWidth, stageHeight, num){
        this.x;
        this.y;        
        this.door = [];
        this.scale = 1;
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
                
        this.height = this.stageHeight / (num * 1.25 + 0.25);
        this.width = this.height / 1.618;
        
        this.num_height = num;
        this.num_width = parseInt(this.stageWidth / (this.width * 2.2));

        this.heigth_gap = this.height / 4;
        this.width_gap = (this.stageWidth - (this.width * this.num_width)) / (this.num_width + 1)

       
        for(let i = 0; i < this.num_width; i++){
            this.door[i] = [];

            for(let j = 0; j < this.num_height; j++){

                this.x = this.width_gap * (i + 1) + this.width * i;
                this.y = this.heigth_gap * (j + 1) + this.height * j
                this.door[i][j] = new Door(
                    this.x,
                    this.y,
                    this.width,
                    this.height,
                    
               )
   
            }      
            
        }
//ctx.fillRect(-this.width, 0, this.width, this.height);
        window.addEventListener('click', (e) => {
            console.log(e.clientX);
            console.log(e.clientY);
            for(let i = 0; i < this.num_width; i++){   
                for(let j = 0; j < this.num_height; j++){
                    if(e.clientX > this.door[i][j].x && e.clientX < this.door[i][j].x + this.door[i][j].width && e.clientY > this.door[i][j].y && e.clientY < this.door[i][j].y + this.door[i][j].height){
                        if(this.door[i][j].click == false){
                            this.door[i][j].click = true;

                        }else{
                            this.door[i][j].click = false;
                        }
                        
                    }
                    
                }      
                
            }
        })
    }
    

    animate(ctx){        

        for(let i = 0; i < this.num_width; i++){
            for(let j = 0; j < this.num_height; j++){

                this.door[i][j].animate(ctx);
            }
            
            
        }
    }
}