export default class Extras {
    constructor(type, gameHeight) {
        switch(type) {
            case "slimShake":
                this.height = 70;
                this.width = 50;
                this.position = {
                    x: Math.floor(Math.random() * 769),
                    y: gameHeight - this.height
                }
                break;
        }
    }

    draw(ctx) {
        ctx.drawImage(document.getElementById("slimShake"), this.position.x, this.position.y, this.width, this.height);
    }
}