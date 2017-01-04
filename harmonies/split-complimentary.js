function splitComplimentary(hsl) {
  const x = hsl.hue;
  const y = (x + 120) % 360;
  const z = (y + 60) % 360;

  return [x, y, z];
}

module.exports = splitComplimentary;
