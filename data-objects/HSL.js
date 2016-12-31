const HSL_RGB = require('../converters/HSL_RGB');

function HSL(hue, sat, light) {
  this.hue = hue,
  this.sat = sat,
  this.light = light
};

HSL.prototype.toRGB = function () {
  return HSL_RGB(this);
};

module.exports = HSL;
