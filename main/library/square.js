// square.js
const Shape = require('./shape.js');

class Square extends Shape {
    constructor(sideLength, color) {
        super(color);
        this.sideLength = sideLength;
    } // constructor

    draw() {
        return `
        <rect x="${150 - this.sideLength / 2}" y="${100 - this.sideLength / 2}" width="${this.sideLength}"
        height="${this.sideLength} fill="${this.color}" />
        `;
    } // draw()

} // Square

module.exports = Square;