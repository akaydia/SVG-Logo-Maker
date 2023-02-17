// triangle.js
const Shape = require('./shape.js');

class Triangle extends Shape {
    constructor(sideLength, color) {
        super(color);
        this.sideLength = sideLength;
    } // constructor

    draw() {
        const height = Math.sqrt(3) / 2 * this.sideLength;
        return `
            <polygon points = "150, ${100 - height / 3} ${150 - this.sideLength} ${150 + this.sideLength / 2},
            ${100 + height / 3}" fill="${this.color}" />
        `
    } // draw()
} // triangle

module.exports = Triangle;
