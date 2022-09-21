var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = new Node(value);
    if (this.head === null && this.tail === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail = node;
      this.head.next = node;
    }
  };

  list.removeHead = function() {
      var currentHeadValue = this.head.value;
      this.head = this.head.next;
      return currentHeadValue;
  };

  list.contains = function(target) {
    if (this.head.value === target || this.tail.value === target || this.head.next === target) {
      return true;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
