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
        ctx.font = "30px Invasion2000";
        ctx.fillStyle = "white";
        ctx.fillText("Bamboo eaten:", 600, 50);
        ctx.fillStyle = "orange";
        ctx.fillText(this.score, 760, 50);
        ctx.fillStyle = "red";
        ctx.fillText("Eat    more", 120, 50);
        ctx.fillText("to get fatter", 120, 80);
        ctx.fillStyle = "yellow";
        ctx.fillText(this.fatScore, 110, 50);
        let heartPosX = 280;
        for(var i = 0; i < this.lives; i++) {
            ctx.drawImage(document.getElementById("heart"), heartPosX, 35);
            heartPosX += 30;
        }
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