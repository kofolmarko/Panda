export default class InputHandler {

    constructor(character, game) {

        document.addEventListener('keydown', (event) => {
            switch(event.keyCode) {
            case 37:
                character.moveLeft();
                break;

            case 39:
                character.moveRight();
                break;
            
            case 38:
                if(character.position.y == character.gameHeight - character.height && game.gamestate == 1)
                    character.jump()
                break;

            case 27:
                if(game.gamestate == 1 || game.gamestate == 0)
                    game.togglePause();
                break;
            
            case 32:
                if(game.gamestate == 2 || game.gamestate == 3)
                    game.start();
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