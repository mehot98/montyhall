import {Door} from "./door.js";

export class DoorGroup{
    constructor(ctx, stageWidth, stageHeight, num){
        this.x;
        this.y;        
        this.door = [];
        this.scale = 1;
        this.click = 0;
        this.i = 0;
        this.j = 0;
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
        window.addEventListener('click', this.click_door.bind(this))
        const ran_i = Math.floor(Math.random() * this.num_width);
        const ran_j = Math.floor(Math.random() * this.num_height);
        this.door[ran_i][ran_j].answer = true;

    }
    

    animate(ctx){
        for(let i = 0; i < this.num_width; i++){
            for(let j = 0; j < this.num_height; j++){

                this.door[i][j].animate(ctx);
            }         
        }

    }

    click_door(e){        
        let ran_i;
        let ran_j;

        for(let i = 0; i < this.num_width; i++){   
            for(let j = 0; j < this.num_height; j++){
                if(e.clientX > this.door[i][j].x && e.clientX < this.door[i][j].x + this.door[i][j].width && e.clientY > this.door[i][j].y && e.clientY < this.door[i][j].y + this.door[i][j].height){
                    if(this.door[i][j].click == false && this.click != 1){
                        this.door[i][j].click = true;

                    }else{
                        this.door[i][j].click = false;
                    }
                    if(this.door[i][j].answer){
                        do{
                            ran_i = Math.floor(Math.random() * this.num_width);
                            ran_j = Math.floor(Math.random() * this.num_height);
                        }while(ran_i == i && ran_j == j);   
                        this.door[ran_i][ran_j].random = true;
                    }
                    this.door[i][j].random = true;
                    this.click += 1;
                }
                
            }      
            
        }

        if(this.click == 1){
            requestAnimationFrame(this.click_first.bind(this));
            
            this.click = 0;
        }
    }

    click_first(i1, j1){
        var animation = requestAnimationFrame(this.click_first.bind(this));
        
        this.click += 1;
        
        if((this.door[this.i][this.j].answer == false) && (this.door[this.i][this.j].random == false)){
            
            this.door[this.i][this.j].click = true;

         }
        

        for(let i = 0; i < this.num_width; i++){
            for(let j = 0; j < this.num_height; j++){
                if(this.door[i][j].random){
                    this.door[i][j].click = false;
                }
            }         
        }

        if(this.click > 5){
            this.click = 0;
            
            if(this.i < this.num_width - 1){
                this.i++;
            }else{
                this.i = 0;
                this.j++;
                if(this.j == this.num_height){
                    cancelAnimationFrame(animation);
                    this.click = 100;
                }
            }
            
        }
    }

}