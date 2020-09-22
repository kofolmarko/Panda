export default class Menu {
    constructor(game, scoreboard) {
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.scoreboard = scoreboard;
    }

    draw(ctx, type) {

        switch(type) {
            case "pause":
                ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
                ctx.fillRect(0, 0, this.gameWidth, this.gameHeight);
                ctx.fillStyle = "white";
                ctx.font = "30px Invasion2000";
                ctx.fillText("paused", this.gameWidth / 2, this.gameHeight / 2);
                break;

            case "menu":
                ctx.drawImage(document.getElementById("bg0"), 0, -150);
                ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
                ctx.textAlign = "center";
                ctx.fillRect(0, 0, this.gameWidth, this.gameHeight);
                ctx.fillStyle = "white";
                ctx.font = "30px Invasion2000";
                ctx.fillText("press SPACE to play", this.gameWidth / 2, this.gameHeight / 2);
                break;
            
            case "gameover":
                ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
                ctx.textAlign = "center";
                ctx.fillRect(0, 0, this.gameWidth, this.gameHeight);
                ctx.fillStyle = "white";
                ctx.font = "30px Invasion2000";
                ctx.fillText("press SPACE to try again", this.gameWidth / 2, this.gameHeight / 2);
                ctx.fillText("You ate: " + this.scoreboard.score + " bamboo sticks.", this.gameWidth / 2, this.gameHeight / 2 + 100);
                ctx.fillStyle = "red";
                ctx.font = "60px Invasion2000";
                ctx.fillText("GAME OVER", this.gameWidth / 2, this.gameHeight / 3);
                break;
        } 
    }
}