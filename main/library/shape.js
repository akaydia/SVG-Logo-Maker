// shape.js


class Shape {
    constructor(color) {
      this.color = color;
    } // constructor()
  
    draw() {
      throw new Error('draw() method must be implemented');
    } // draw()
  } // shape

  module.exports = Shape;