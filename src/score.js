export default class Score {
    constructor(game) {
        this.score = 0;
        this.fatScore = 10;
        this.lives = 5;

        this.isFat = false;

        this.game = game;
    }

    reset() {
        this.score = 0;
        this.fatScore = 10;
        this.lives = 5;
        this.isFat = false;
    }
    
    draw(ctx) {
        ctx.textAlign = "center";
        ctx.font = "40px Invasion2000";
        ctx.fillStyle = "#ffcc99";
        ctx.fillText("Bamboo eaten:", 620, 50);
        ctx.fillStyle = "#e6e600";
        ctx.fillText(this.score, 760, 50);
        ctx.fillStyle = "#00cc66";
        ctx.fillText("Eat         more", 120, 50);
        ctx.fillText("to get fatter", 120, 90);
        ctx.fillStyle = "#ffcc99";
        ctx.fillText(this.fatScore, 110, 50);
        let heartPosX = 750;
        let heartPosY = 200;
        for(var i = 0; i < this.lives; i++) {
            ctx.drawImage(document.getElementById("heart"), heartPosX, heartPosY);
            heartPosY += 30;
        }
        ctx.fillText("esc ||", 400, 50);
    }

    update(type) {
        switch(type) {
            case "score":
                console.log("score");
                this.score++;
                this.fatScore--;
                if(this.fatScore == 0){
                    this.fatScore = 10;
                    this.isFat = true;
                    return true;
                }
                break;
            case "lives":
                this.lives--;
                if(this.lives == 0)
                    this.game.gamestate = 3;
                break;
        }
    }
}
