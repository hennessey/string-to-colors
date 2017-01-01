const int_RGB = require('./converters/int_RGB');
const javaHash = require('./hashes/java-hash');
const HSL = require('./data-objects/HSL');
const RGB_HSL = require('./converters/RGB_HSL');
const triadic = require('./harmonies/triadic');
const HSL_RGB = require('./converters/HSL_RGB');
const RGB_hex = require('./converters/RGB_hex');


//@@param string => a string to generate gradient for
//@@param harmony => optional argument for which color harmony to use to generate
// color set
function stringToColors(str, harmony) {
  const hash = javaHash(str);
  const asRGB = int_RGB(hash);
  const asHSL = RGB_HSL(asRGB);
  const harmonicHues = triadic(asHSL);

  const harmonicHexes = harmonicHues
    .map(hue => hueToHSL(hue, asHSL))
    .map(hsl => HSL_RGB(hsl))
    .map(rgb => RGB_hex(rgb));

    return harmonicHexes;
};

function hueToHSL(newHue, baseHue) {
  return new HSL(newHue, baseHue.sat, baseHue.light);
}
