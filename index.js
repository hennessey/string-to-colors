const int_RGB = require('./converters/int_RGB');
const javaHash = require('./hashes/java-hash');
const RGB = require('./data-objects/RGB');

String.prototype.getHashCode = function(hashStrategy) {
    if (hashStrategy) return hashStrategy(this);

    return javaHash(this);
}

Number.prototype.toRGB = function() {
  return int_RGB(this);
};
