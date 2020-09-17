import Collision from "./collision.js";
import Bamboo from "./bamboo.js";
import Character from "./character.js";
import InputHandler from "./input.js";
import Score from "./score.js";
import Extras from "./extras.js"
import Menu from "./menu.js";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let backgroud = document.getElementById("bg0");

let characterImgID = "panda3";

let character = new Character(characterImgID, GAME_WIDTH, GAME_HEIGHT);

let bambooImgID = "bamboo0";

let bamboo = new Bamboo(bambooImgID, GAME_HEIGHT);

let collision = new Collision(character, bamboo);

let score = 0;

let fatScore = 10;

let lives = 5;

let scoreBoard = new Score(score, fatScore, lives);

let slimShake = new Extras("slimShake", GAME_HEIGHT);

let slimShakeCollision = new Collision(character, slimShake);

let boolShake = false;

new InputHandler(character);

character.draw(ctx);

let lastTime = 0;

function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    if(bamboo.position.y > GAME_HEIGHT) {
        bamboo = new Bamboo(bambooImgID, GAME_HEIGHT);
        lives--;
        scoreBoard.update(score, fatScore, lives);
    }

    ctx.clearRect(0, 0, 800, 600);
    ctx.drawImage(backgroud, 0, -150);
    character.update(deltaTime);
    character.draw(ctx);
    bamboo.update(deltaTime);
    bamboo.draw(ctx);
    scoreBoard.draw(ctx);

    if(collision.collisionDetection()){
        bamboo = new Bamboo(bambooImgID, GAME_HEIGHT);
        score++;
        fatScore--;
        scoreBoard.update(score, fatScore, lives);
    }

    if(fatScore == 0) {
        character.getFat()
        fatScore = 10;
        boolShake = true;
        scoreBoard.update(score, fatScore, lives);
    }

    if(boolShake) {
        slimShake.draw(ctx);
        if(slimShakeCollision.pickupDetection()) {
            character.getSlim();
            boolShake = false;
            slimShake = new Extras("slimShake", GAME_HEIGHT);
        }
    }

    collision = new Collision(character, bamboo);
    slimShakeCollision = new Collision(character, slimShake);

    if(lives == 0){
        alert("You ate " + score + " bamboo sticks!");
        lives = 5;
        score = 0;
        fatScore = 10;
        scoreBoard.update(score, fatScore, lives);
    }

    requestAnimationFrame(gameLoop);
}

gameLoop();
