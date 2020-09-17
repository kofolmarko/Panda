export default class Bamboo {
    constructor(imgID, gameHeight) {
        this.imgBamboo = document.getElementById(imgID);

        this.width = 30;
        this.height = 90;

        this.position = {
            x: Math.floor(Math.random() * 769),
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
}