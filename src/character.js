export default class Character {

    constructor(imgID, gameWidth, gameHeight) {
        this.imgCharacter = document.getElementById(imgID);

        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.width = 80;
        this.height = 100;

        this.position = {
            x: gameWidth / 2 - this.width / 2,
            y: gameHeight - this.height
        }

        this.maxSpeed = 10;
        this.speed = 0;

        this.maxAltitude = 10;
        this.altitude = 0;
    }

    moveLeft() {
        this.speed = -this.maxSpeed;
    }

    moveRight() {
        this.speed = this.maxSpeed;
    }

    stop() {
        this.speed = 0;
    }

    jump() {
        this.altitude = -this.maxAltitude;
    }

    draw(ctx) {
        ctx.drawImage(this.imgCharacter, this.position.x, this.position.y, this.width, this.height);
    }

    getFat() {
        this.height *= 1.5;
        this.width *= 1.5;
        this.maxSpeed *= 0.8;
        this.position.y = this.gameHeight - this.height;
    }

    getSlim() {
        this.height /= 1.5;
        this.width /= 1.5;
        this.maxSpeed /= 0.8;
        this.position.y = this.gameHeight - this.height;
    }

    update(deltaTime) {
        if(!deltaTime) return;

        this.position.x += this.speed;
        this.position.y += this.altitude;

        if(this.position.x < 0)
            this.position.x = 0;
        if(this.position.x > this.gameWidth - this.width)
            this.position.x = this.gameWidth - this.width;

        if(this.position.y > this.gameHeight - this.height)
            this.position.y = this.gameHeight - this.height;
        if(this.position.y < this.gameHeight - 2 * this.height){
            this.altitude = this.maxAltitude / 2;
        }
            
    }
}