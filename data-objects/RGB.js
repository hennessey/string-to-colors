const RGB_HSL = require('../converters/RGB_HSL');

function RGB(red, green, blue) {
    this.red = red;
    this.blue = blue;
    this.green = green;
};

RGB.prototype.toHSL = function() {
  return RGB_HSL(this);
};

module.exports = RGB;
