export default class Collision {

    constructor(o1, o2) {
        this.o1 = o1;
        this.o2 = o2;
    }

    collisionDetection() {
        let o1LX = this.getPosition(this.o1, "LX");
        let o1RX = this.getPosition(this.o1, "RX");
        let o1UY = this.getPosition(this.o1, "UY");
        let o1LY = this.getPosition(this.o1, "LY");
        
        let o2LX = this.getPosition(this.o2, "LX");
        let o2RX = this.getPosition(this.o2, "RX");
        let o2UY = this.getPosition(this.o2, "UY");
        let o2LY = this.getPosition(this.o2, "LY");

        if(o2LX < o1RX && o1LX < o2RX && o2LY > o1UY && o1LY > o2UY)
            return true;
    }

    pickupDetection() {
        if((this.obj_1Position.y + this.obj_1Height) - (this.obj_2Position.y - this.obj_2Height) > 0
            && (Math.abs(this.obj_1Position.x - (this.obj_2Position.x - this.obj_2Width))) <= (this.obj_1Width - this.obj_2Width))
        return true;
    }

    getPosition(object, corner) {
        switch(corner) {
            case "LX":
                return object.position.x;
            case "RX":
                return object.position.x + object.width;
            case "UY":
                return object.position.y;
            case "LY":
                return object.position.y + object.height;
        }
    }

    /*
    getDistance() {
        let xDistance = this.o2.position.x - this.o1.position.x;
        let yDistance = this.o2.position.y - this.o1.position.y;

        return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
    }

    getDistanceY() {
        return this.o2.position.y - this.o1.position.y;
    }

    getDistanceX() {
        return this.o2.position.x - this.o1.position.x;
    }
    */

}