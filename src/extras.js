export default class Extras {
    constructor(game, type) {
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        switch(type) {
            case "slimShake":
                this.height = 70;
                this.width = 50;
                this.position = {
                    x: undefined,
                    y: undefined
                }
                this.imgID = "slimShake";
                break;
        }
    }

    draw(ctx) {
        ctx.drawImage(document.getElementById(this.imgID), this.position.x, this.position.y, this.width, this.height);
    }

    init() {
        this.position = {
            x: Math.floor(Math.random() * this.gameWidth - this.width),
            y: this.gameHeight - this.height
        }
    }

    reset() {
        this.position = {
            x: undefined,
            y: undefined
        }
    }
}