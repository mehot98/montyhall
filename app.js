import { DoorGroup } from "./door-group.js";


class App{
    constructor(){
        this.canvas = document.createElement('canvas');
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');

        this.pixelRatio = devicePixelRatio > 1 ? 2 : 1;

        //this.num = prompt("문의 개수를 입력하시오.");
        
        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

                

        window.requestAnimationFrame(this.animate.bind(this));
    }

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * this.pixelRatio;
        this.canvas.height = this.stageHeight * this.pixelRatio;

        this.ctx.scale(this.pixelRatio, this.pixelRatio);

        const width = 100;
        const height = 200;
        
        this.door_group = new DoorGroup(
            this.stageWidth,
            this.stageHeight,
            5//this.num,
        );
    }

    animate(){
        window.requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
        
        this.door_group.animate(this.ctx);
    }


}

window.onload = () => {
    new App();
}