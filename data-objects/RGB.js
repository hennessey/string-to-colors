const RGBtoHSL = require('../converters/RGBtoHSL');

function RGB(red, green, blue) {
    this.red = red;
    this.blue = blue;
    this.green = green;
};

RGB.prototype.toHSL = function() {
  return RGBtoHSL(this);
};

module.exports = RGB;
