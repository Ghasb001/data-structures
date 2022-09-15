var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.first = 0;
  this.last = 0;
};

Stack.prototype.push = function(value) {
  this[this.last] = value;
  this.last++;
};

Stack.prototype.pop = function() {
if (this.last > 0) {
      this.last--;
      var item = this[this.last];
      delete this[this.last];
      return item;
    }
};

Stack.prototype.size = function() {
  if (this.last >= this.first) {
    return this.last - this.first;
  } else {
    return 0;
  }
};