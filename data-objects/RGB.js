const RGB_HSL = require('../converters/RGB_HSL');
const RGB_hex = require('../converters/RGB_hex');

function RGB(red, green, blue) {
    this.red = red;
    this.blue = blue;
    this.green = green;
};

RGB.prototype.toHSL = function() {
  return RGB_HSL(this);
};

RGB.prototype.toHex = function() {
  return RGB_hex(this);
};

module.exports = RGB;
