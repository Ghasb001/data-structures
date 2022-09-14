var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.first = 0;
  newQueue.last = 0;
  extend(newQueue, queueMethods);
  return newQueue;
};

//savepoint

var queueMethods = {};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};


queueMethods.enqueue = function(value) {
  this[this.last] = value;
  this.last++;
};

queueMethods.dequeue = function() {
  console.log(this)
  var item = this[this.first];
  delete this[this.first];
  this.first++;
  return item;
};

queueMethods.size = function() {
  if (this.last >= this.first) {
    return this.last - this.first;
  } else {
    return 0;
  }
};