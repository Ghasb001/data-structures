var BinarySearchTree = function(value) {
  var tree = Object.create(binaryMethods)
  tree.nodes = [value];
  tree.value = value;
  tree.left = null;
  tree.right = null;
  return tree;
};

binaryMethods = {};

binaryMethods.insert = function (value) {

  if (value === null) {
    return null;
  } else if (value !== null) {
  this.nodes.push(value)
}
  var tree = BinarySearchTree(value);
  if (!this) {
    this.value = tree;
  } else if (value < this.value) {
    if (!this.left) {
      this.left = tree;
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value) {
    if (!this.right) {
      this.right = tree;
    } else {
      this.right.insert(value);
    }
  }
};

binaryMethods.contains = function (target) {
  if (this.value === target) {
    return true;
  } else if (target < this.value && this.left) {
    return this.left.contains(target);
  } else if (target > this.value && this.right) {
    return this.right.contains(target);
  } else {
    return false;
  }
};

binaryMethods.depthFirstLog = function (cb) {
  this.nodes.map(function (element) {
    return cb(element);
  })
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
