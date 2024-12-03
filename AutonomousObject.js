class AutonomousObject {
    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.width = 50;
        this.height = 50;
        this.directionX = 1; 
        this.directionY = 1; 
    }

    move() {
        this.x += this.speed * this.directionX;
        this.y += this.speed * this.directionY;

        if (this.x <= 0 || this.x + this.width >= canvas.width) {
            this.directionX = -this.directionX;
        }
        if (this.y <= 0 || this.y + this.height >= canvas.height) {
            this.directionY = -this.directionY;
        }
    }

    resetPosition() {
        this.x = 200;
        this.y = 200;
        this.directionX = 1;
        this.directionY = 1;
    }

    draw(context) {
        context.fillStyle = 'red';
        context.fillRect(this.x, this.y, this.width, this.height);
    }

    checkCollision(flyingObject) {
        if (
            this.x < flyingObject.x + flyingObject.width &&
            this.x + this.width > flyingObject.x &&
            this.y < flyingObject.y + flyingObject.height &&
            this.y + this.height > flyingObject.y
        ) {
            return true;
        }
        return false;
    }
}

