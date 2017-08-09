const simpleHex = (str) => {
  //#FFFFFF -> int
  const maxHex = 16777215;

  let hash = 0;

  if (str.length === 0) return hash;

  const charHash = str.split("")
    .map(char => char.charCodeAt(0))
    .reduce((acc, next) => acc + next.toString())

  return charHash % maxHex;
}

module.exports = simpleHex;