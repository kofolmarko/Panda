export default class Collision {

    constructor(obj_1, obj_2) {
        this.obj_1Position = {
            x: obj_1.position.x,
            y: obj_1.position.y
        }

        this.obj_2Position = {
            x: obj_2.position.x + obj_2.width,
            y: obj_2.position.y + obj_2.height
        }

        this.obj_2Width = obj_2.width;
        this.obj_1Width = obj_1.width;

        this.obj_1Height = obj_1.height;
        this.obj_2Height = obj_2.height;
    }

    collisionDetection() {
        if(this.obj_1Position.y - this.obj_2Position.y < 0
            && (this.obj_2Position.x - this.obj_1Position.x > 0 && this.obj_2Position.x - this.obj_1Position.x < this.obj_1Width + this.obj_2Width))
            return true;
    }

    pickupDetection() {
        if((this.obj_1Position.y + this.obj_1Height) - (this.obj_2Position.y - this.obj_2Height) > 0
            && (Math.abs(this.obj_1Position.x - (this.obj_2Position.x - this.obj_2Width))) <= (this.obj_1Width - this.obj_2Width))
        return true;
    }

}