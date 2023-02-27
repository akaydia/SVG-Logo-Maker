const Square = require('../library/square.js');

describe('Square class', () => {
  it('should return the correct SVG string', () => {
    const square = new Square(50, 'blue');
    const expectedSVG = '<rect x="125" y="75" width="50" height="50" fill="blue" />';
    expect(square.draw()).toBe(expectedSVG);
  });


  it('should set the sideLength and color properties correctly', () => {
    const square = new Square(80, 'green');
    expect(square.sideLength).toBe(80);
    expect(square.color).toBe('green');
  });
});
