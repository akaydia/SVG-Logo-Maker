const Circle = require('../library/circle.js');

describe('Circle class', () => {
  it('should return the correct SVG string', () => {
    const circle = new Circle(75, 'red');
    const expectedSVG = '<circle cx="150" cy="100" r="75" fill="red" />';
    expect(circle.draw()).toBe(expectedSVG);
  });

  it('should set the radius and color properties correctly', () => {
    const circle = new Circle(40, 'blue');
    expect(circle.radius).toBe(40);
    expect(circle.color).toBe('blue');
  });
});
