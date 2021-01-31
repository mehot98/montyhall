import {Door} from "./door.js";

export class DoorGroup{
    constructor(stageWidth, stageHeight, num){
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
        this.num = num;
        

        this.width = stageWidth / (num * 2 + 1);
        this.height = this.width * 1.618;

        this.heigth_gap = (this.stageHeight - (this.height * num)) / (num + 1);

    }

    animate(ctx){
        const door = [];

        for(let i = 0; i < this.num; i++){

            door[i] = [];

            for(let j = 0; j < this.num; j++){

                door[i][j] = new Door(
                    this.width * (2 * i + 1),
                    this.heigth_gap * (j + 1) + this.height * j,
                    this.width,
                    this.height,
                    
               )
   
               door[i][j].animate(ctx);
            }
            
            
        }
    }
}