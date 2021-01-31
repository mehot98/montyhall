import {Door} from "./door.js";

export class DoorGroup{
    constructor(stageWidth, stageHeight, num){
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
                
        this.height = this.stageHeight / (num * 1.25 + 0.25);
        this.width = this.height / 1.618;
        
        this.num_height = num;
        this.num_width = parseInt(this.stageWidth / (this.width * 1.4));

        this.heigth_gap = this.height / 4;
        this.width_gap = (this.stageWidth - (this.width * this.num_width)) / (this.num_width + 1)
    }

    animate(ctx){
        const door = [];

        for(let i = 0; i < this.num_width; i++){

            door[i] = [];

            for(let j = 0; j < this.num_height; j++){

                door[i][j] = new Door(
                    this.width_gap * (i + 1) + this.width * i,
                    this.heigth_gap * (j + 1) + this.height * j,
                    this.width,
                    this.height,
                    
               )
   
               door[i][j].animate(ctx);
            }
            
            
        }
    }
}