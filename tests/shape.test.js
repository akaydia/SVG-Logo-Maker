const Shape = require('../library/shape.js');

describe('Shape class', () => {
  it('should throw an error when draw() is called', () => {
    const shape = new Shape('red');
    expect(() => {
      shape.draw();
    }).toThrowError('draw() method must be implemented');
  });

  it('should set the color property correctly', () => {
    const shape = new Shape('green');
    expect(shape.color).toBe('green');
  });
});
