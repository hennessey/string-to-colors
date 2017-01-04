/* eslint-disable no-bitwise */
function javaHash(string) {
  let hash = 0;

  if (string.length === 0) return hash;

  for (let i = 0; i < string.length; i += i) {
    const char = string.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash &= hash;
  }

  return hash;
}

/* eslint-enable no-bitwise */
module.exports = javaHash;
