class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  constructor() {
    this.first = 0;
    this.last = 0;
  }

  enqueue(value) {
    this[this.last] = value;
    this.last++;
  };

  dequeue() {
    var item = this[this.first];
    delete this[this.first];
    this.first++;
    return item;
  };

  size() {
    if (this.last >= this.first) {
      return this.last - this.first;
    } else {
      return 0;
    }
  };

}
