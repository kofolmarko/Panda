export default class Bamboo {
    constructor(game) {
        this.imgBamboo = document.getElementById("bamboo0");

        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.width = 30;
        this.height = 90;

        this.position = {
            x: Math.floor(Math.random() * (this.gameWidth - this.width)),
            y: -this.height
        }

        this.speed = 10;
    }

    draw(ctx) {
        ctx.drawImage(this.imgBamboo, this.position.x, this.position.y, this.width, this.height);
    }

    update(deltaTime) {
        if(!deltaTime) return;

        this.position.y += this.speed;
    }

    reset(collision) {
        if(this.position.y > this.gameHeight || collision) {
            this.position.x = Math.floor(Math.random() * (this.gameWidth - this.width));
            this.position.y = -this.height;

            if(!collision) 
                return true;
            return false;
        }
        return false;
    }
}