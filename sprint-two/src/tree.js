var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  // your code here
  newTree.children = [];  // fix me
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //console.log(value);
  var child = new Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  var isChild = false;
  var doesContain = function (child) {
    if (child.value === target) {
      isChild = true;
    }
    else {
      for (var i = 0; i < child.children.length; i++) {
        doesContain(child.children[i]);

      }
    }
  }
  doesContain(this)
 return isChild;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
