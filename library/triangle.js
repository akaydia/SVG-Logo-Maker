const Shape = require('./shape.js');

class Triangle extends Shape {
    constructor(sideLength, color) {
        super(color);
        this.sideLength = sideLength;
    } // constructor

    draw() {
        return '<polygon points="150,25 75,175 225,175" fill="' + this.color + '" />';
    } // draw
} // triangle

module.exports = Triangle;
