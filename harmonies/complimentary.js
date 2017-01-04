function complimentary(hsl) {
  const base = hsl.hue;
  const compliment = (base + 180) % 360;

  return [base, compliment];
}

module.exports = complimentary;
