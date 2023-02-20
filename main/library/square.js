// square.js
const Shape = require('./shape.js');

class Square extends Shape {
    constructor(sideLength, color) {
        super(color);
        this.sideLength = sideLength;
    } // constructor

    draw() {
      const x = (300 - this.sideLength) / 2;
      const y = (200 - this.sideLength) / 2;
      return `
        <rect x="${x}" y="${y}" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />
      `;
    }


} // Square

module.exports = Square;