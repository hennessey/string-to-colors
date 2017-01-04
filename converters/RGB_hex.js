function intToHex(int) {
  const hex = int.toString(16);
  return (hex.length === 1) ? `0${hex}` : hex;
}

function RGB_hex(rgb) {
  const r = intToHex(rgb.red);
  const g = intToHex(rgb.green);
  const b = intToHex(rgb.blue);

  return `#${r}${g}${b}`;
}


module.exports = RGB_hex;
