var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  item = item.toUpperCase();
  //console.log(this)
  //console.log(this._storage[item]);
  this._storage[item] = item;
};

setPrototype.contains = function(item) {
  item = item.toUpperCase();
  if (this._storage[item] === item) {
    return true;
  }
  return false;
};

setPrototype.remove = function(item) {
  item = item.toUpperCase();
  if(this._storage[item] !== undefined){
    delete this._storage[item];
    }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
