class FlyingObject {
    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.width = 50;
        this.height = 50;
    }

    moveUp() {
        if (this.y > 0) this.y -= this.speed;
    }

    moveDown() {
        if (this.y + this.height < canvas.height) this.y += this.speed;
    }

    moveLeft() {
        if (this.x > 0) this.x -= this.speed;
    }

    moveRight() {
        if (this.x + this.width < canvas.width) this.x += this.speed;
    }

    resetPosition() {
        this.x = 100;
        this.y = 100;
    }

    draw(context) {
        context.fillStyle = 'blue';
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}

