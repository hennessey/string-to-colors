const RGB = require('../data-objects/RGB');

function intToRGB(int) {
  const blue = int & 255;
  const green = (int >> 8) & 255;
  const red = (int >> 16) & 255;

  return new RGB(red, green, blue);
};

module.exports = intToRGB;
