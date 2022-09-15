class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.first = 0;
    this.last = 0;
  }

  push(value) {
    this[this.last] = value;
    this.last++;
  }

  pop() {
    if (this.last > 0) {
      this.last--;
      var item = this[this.last];
      delete this[this.last];
      return item;
    }
  }

  size() {
    if (this.last >= this.first) {
      return this.last - this.first;
    } else {
      return 0;
    }
  }

}