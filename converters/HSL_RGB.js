const RGB = require('../data-objects/RGB');

function HSL_RGB(hsl) {
  const hue = hsl.hue;
  const light = hsl.light;
  const sat = hsl.sat;

  const C = (1 - Math.abs((2 * light) - 1)) * sat;
  const X = (C * (1 - Math.abs(((hue / 60) % 2) - 1)));
  const m = light - (C / 2);

  let rgbP = [0, 0, 0];

  if (hue >= 0 && hue < 60) {
    rgbP = [C, X, 0];
  } else if (hue >= 60 && hue < 120) {
    rgbP = [X, C, 0];
  } else if (hue >= 120 && hue < 180) {
    rgbP = [0, C, X];
  } else if (hue >= 120 && hue < 180) {
    rgbP = [0, C, X];
  } else if (hue >= 180 && hue < 240) {
    rgbP = [0, X, C];
  } else if (hue >= 240 && hue < 300) {
    rgbP = [X, 0, C];
  } else if (hue >= 300 && hue < 360) {
    rgbP = [C, 0, X];
  }

  const r = Math.floor((rgbP[0] + m) * 255);
  const g = Math.floor((rgbP[1] + m) * 255);
  const b = Math.floor((rgbP[2] + m) * 255);

  return new RGB(r, g, b);
}

module.exports = HSL_RGB;
