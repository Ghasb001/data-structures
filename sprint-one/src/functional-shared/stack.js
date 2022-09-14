var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.first = 0;
  newStack.last = 0;
  extend(newStack, stackMethods);
  extend(newStack, stackMethods)
  return newStack;
};

var stackMethods = {};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};


stackMethods.push = function(value) {
  this[this.last] = value;
  this.last++;
};

stackMethods.pop = function() {
console.log(this)

if (this.last > 0) {
      this.last--;
      var item = this[this.last];
      delete this[this.last];
      return item;
    }
};

stackMethods.size = function() {
  if (this.last >= this.first) {
    return this.last - this.first;
  } else {
    return 0;
  }
};