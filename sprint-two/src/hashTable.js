

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  k = k.toString()
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);
  if (bucket === undefined) {
    this._storage.set(index, [k, v]);
  }  else {
    if (bucket[0] === k) {
      bucket[1] = v;
    }
    this._storage.set(index, [bucket, [k ,v]])

  }

};

HashTable.prototype.retrieve = function(k) {
  k = k.toString()
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);


  if (!Array.isArray(bucket[0])) {
    return bucket[1]
  } else if (Array.isArray(bucket[0])) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
      if (bucket[0] === k) {
      delete bucket[0];
      delete bucket[1];
      }
    }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


