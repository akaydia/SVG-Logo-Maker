const Shape = require('./shape.js');

class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    } // constructor    

    draw() {
        return `<circle cx="150" cy="100" r="75" fill="${this.color}" />`;
    } // draw()
} // circle 

module.exports = Circle;