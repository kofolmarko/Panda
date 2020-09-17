import Character from "./character.js";

export default class InputHandler {

    constructor(character) {

        document.addEventListener('keydown', (event) => {
            switch(event.keyCode) {
            case 37:
                character.moveLeft();
                break;

            case 39:
                character.moveRight();
                break;
            
            case 38:
                if(character.position.y == character.gameHeight - character.height)
                    character.jump()
                break;
            }
        });

        document.addEventListener('keyup', (event) => {
            switch(event.keyCode) {
            case 37:
                if(character.speed < 0) {
                    character.stop();
                }
                break;

            case 39:
                if(character.speed > 0) {
                    character.stop();
                }
                break;
            }
        });
    }

}
