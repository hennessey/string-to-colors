const HSL = require('./hsl');

function RGBtoHSL(rgb) {
  //Convert ranges 0..255 to 0..1
  const r = rgb.red / 255;   //233 = .9137
  const g = rgb.green / 255; //24 = .8235
  const b = rgb.blue / 255;  //210 = .0941

  const cMAX = Math.max(r, g, b); // .9137
  const cMIN = Math.min(r, g, b); // .0941

  const delta = cMAX - cMIN; // .8196

  let hsl = new HSL();

  let hue = 0;
  //calculate hue
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

  hue = hue * 60;

  if (hue > 0) {
    hsl.hue = hue;
  } else {
    hsl.hue = hue + 360;
  }
  //calculate lightness
  hsl.light = (cMAX + cMIN) / 2;

  //calculate saturation;
  if (delta === 0) {
    hsl.sat = 0;
  } else if (hsl.light > 0.5 ){
    hsl.sat = delta / ( 2 - (cMAX + cMIN) ); 
  } else {
    hsl.sat = delta / (cMAX + cMIN);
  }

  return hsl;
};

module.exports = RGBtoHSL;
