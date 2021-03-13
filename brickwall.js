class BrickWall {
    constructor(x, y, halfWidth, halfHeight, width, height, n, direction) {
        this.width = width;
        this.height = height;
        this.number = n;
        this.x = x;
        this.y = y;
        this.halfWidth = halfWidth;
        this.halfHeight = halfHeight;
        this.direction = direction;
    }

    display() {
        var x = this.x - this.halfWidth;
        var y = this.y - this.halfHeight;
        for(var i = 0; i < this.number; i++) {
            
            fill("black");
            strokeWeight(3);
            stroke("white");
            rect(x, y, this.width, this.height);
            if(this.direction === "horizontal") {
                x = x + this.width;
            } else if(this.direction === "vertical") {
                y = y + this.height;
            }
        }
    }
}