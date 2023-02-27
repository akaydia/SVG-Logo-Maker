const Triangle = require('../library/triangle.js');

describe('Triangle class', () => {
  it('should return the correct SVG string', () => {
    const triangle = new Triangle(100, 'orange');
    const expectedSVG = '<polygon points="150,25 75,175 225,175" fill="orange" />';
    expect(triangle.draw()).toBe(expectedSVG);
  });

  it('should set the sideLength and color properties correctly', () => {
    const triangle = new Triangle(120, 'purple');
    expect(triangle.sideLength).toBe(120);
    expect(triangle.color).toBe('purple');
  });
});
