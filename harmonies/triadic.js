function triadic(hsl) {
  const x = hsl.hue;
  const y = (x + 120) % 360;
  const z = (y + 120) % 360;

  return [x, y, z];
};

module.exports = triadic;
