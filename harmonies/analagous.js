function analagous(hsl) {
  const b = hsl.hue;
  const a = ((b - 30) + 360) % 360;
  const c = (b + 30) % 360;

  return [a, b, c];
}

module.exports = analagous;
