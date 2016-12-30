String.prototype.getHashCode = function() {
  var hash = 0;

  if (this.length === 0) return hash;

  for (i = 0; i < this.length; i++) {
    var char = this.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }

  return hash;
}
