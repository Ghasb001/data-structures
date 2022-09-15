var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.first = 0;
  this.last = 0;
};

Queue.prototype.enqueue = function(value) {
  this[this.last] = value;
  this.last++;
};

Queue.prototype.dequeue = function() {
  var item = this[this.first];
  delete this[this.first];
  this.first++;
  return item;
};

Queue.prototype.size = function() {
  if (this.last >= this.first) {
    return this.last - this.first;
  } else {
    return 0;
  }
};