const intToRgb = require('./intToRgb');
const RGB = require('./rgb');

String.prototype.getHashCode = function() {
  let hash = 0;

  if (this.length === 0) return hash;

  for (i = 0; i < this.length; i++) {
    let char = this.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }

  return hash;
}

Number.prototype.toRGB = function() {
  return intToRgb(this);
};
