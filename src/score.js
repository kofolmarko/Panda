export default class Score {
    constructor(score, fatScore, lives) {
        this.score = score;
        this.fatScore = fatScore;
        this.lives = lives;
    }
    
    draw(ctx) {
        ctx.font = "30px Helvetica";
        ctx.fillStyle = "white";
        ctx.fillText("Bamboo eaten: " + this.score, 500, 50);
        ctx.font = "bold 20px Comic Sans MS";
        ctx.fillStyle = "red";
        ctx.fillText("Eat " + this.fatScore + " more to get fatter", 20, 50);
        let heartPosX = 325;
        for(var i = 0; i < this.lives; i++) {
            ctx.drawImage(document.getElementById("heart"), heartPosX, 35);
            heartPosX += 30;
        }
    }

    update(score, fatScore, lives) {
        this.score = score;
        this.fatScore = fatScore;
        this.lives = lives;
    }
}