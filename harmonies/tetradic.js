function tetradic(hsl) {
  const a = hsl.hue;
  const b = (a + 90) % 360;
  const c = (b + 90) % 360;
  const d = (c + 90) % 360;

  return [a, b, c, d];
};

module.exports = tetradic;
