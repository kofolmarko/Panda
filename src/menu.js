export default class Menu {
    constructor() {

    }

    drawDeathScreen(ctx, gameHeight, gameWidth, playButton, score) {
        ctx.fillText("You ate " + score + " bamboos!", gameWidth / 2, gameHeight / 2);
        ctx.fillStyle = "rgba(0, 0, 0, 0.8)"
        ctx.fillRect(0, 0, gameWidth, gameHeight);
        ctx.drawImage(playButton, gameWidth / 2 - 50, gameHeight / 2 - 50);
    }
}