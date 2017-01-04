const HSL = require('../data-objects/HSL');

function RGB_HSL(rgb) {
  // Convert ranges 0..255 to 0..1
  const r = rgb.red / 255;
  const g = rgb.green / 255;
  const b = rgb.blue / 255;

  const cMAX = Math.max(r, g, b); // .9137
  const cMIN = Math.min(r, g, b); // .0941

  const delta = cMAX - cMIN; // .8196

  const hsl = new HSL();

  let hue = 0;
  // Calculate hue
  if (delta === 0) {
    hue = 0;
  } else if (cMAX === r) {
    hue = ((g - b) / delta);
  } else if (cMAX === g) {
    hue = ((b - r) / delta) + 2;
  } else if (cMAX === b) {
    hue = ((r - g) / delta) + 4;
  } else {
    throw new Error('Unable to calculate Hue');
  }

  hue *= 60;

  if (hue > 0) {
    hsl.hue = hue;
  } else {
    hsl.hue = hue + 360;
  }
  // Calculate lightness
  hsl.light = (cMAX + cMIN) / 2;

  // Calculate saturation;
  if (delta === 0) {
    hsl.sat = 0;
  } else if (hsl.light > 0.5) {
    hsl.sat = delta / (2 - (cMAX + cMIN));
  } else {
    hsl.sat = delta / (cMAX + cMIN);
  }

  return hsl;
}

module.exports = RGB_HSL;
