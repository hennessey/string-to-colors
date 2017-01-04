const RGB = require('../data-objects/RGB');

/* eslint-disable no-bitwise */
function int_RGB(int) {
  const blue = int & 255;
  const green = (int >> 8) & 255;
  const red = (int >> 16) & 255;

  return new RGB(red, green, blue);
}

/* eslint-enable no-bitwise */
module.exports = int_RGB;
