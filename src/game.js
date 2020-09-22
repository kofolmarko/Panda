import Collision from "./collision.js";
import Bamboo from "./bamboo.js";
import Character from "./character.js";
import InputHandler from "./input.js";
import Score from "./score.js";
import Extras from "./extras.js"
import Menu from "./menu.js";

const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3
}

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.gameObjects = [];

        this.character = new Character(this);
        this.bamboo = new Bamboo(this);
        this.slimShake = new Extras(this, "slimShake");

        this.scoreboard = new Score(this);
        this.menu = new Menu(this, this.scoreboard);

        new InputHandler(this.character, this);

        this.gamestate = GAMESTATE.MENU;
    }

    start() {
        this.gamestate = GAMESTATE.RUNNING;

        this.gameObjects = [this.character, this.bamboo];

        this.slimShake.reset();
        this.character.reset();
        this.scoreboard.reset();

        this.collisionCB = new Collision(this.character, this.bamboo);
        this.collisionCSS = new Collision(this.character, this.slimShake); 
    }

    draw(ctx) {
        this.gameObjects.forEach(object => object.draw(ctx));

        if(this.gamestate == GAMESTATE.RUNNING || this.gamestate == GAMESTATE.PAUSED) {
            this.scoreboard.draw(ctx);

            if(this.scoreboard.isFat)
                this.slimShake.draw(ctx);    
        } 

        switch(this.gamestate) {
            case GAMESTATE.PAUSED:
                this.menu.draw(ctx, "pause");
                break;

            case GAMESTATE.MENU:
                this.menu.draw(ctx, "menu");
                break;

            case GAMESTATE.GAMEOVER:
                this.menu.draw(ctx, "gameover");
                break;
        }
    }

    update(deltaTime) {
        if(this.gamestate != GAMESTATE.RUNNING)
            return;

        this.gameObjects.forEach(object => object.update(deltaTime));
    
        if(this.bamboo.reset(false))
            this.scoreboard.update("lives");

        if(this.collisionCB.collisionDetection()) {
            this.bamboo.reset(true);
            if(this.scoreboard.update("score")) {
                this.character.getFat();
                this.slimShake.init();
            }
        }

        if(this.collisionCSS.collisionDetection()){
            this.character.getSlim();
            this.slimShake.reset();
        }
    }

    togglePause() {
        if(this.gamestate == GAMESTATE.PAUSED)
            this.gamestate = GAMESTATE.RUNNING;
        else
            this.gamestate = GAMESTATE.PAUSED;
    }
}