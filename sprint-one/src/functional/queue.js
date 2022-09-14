var Queue = function() {

  //stores my methods
  var someInstance = {
    first: 0,
    last: 0
  }

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
      storage[someInstance.last] = value;
      someInstance.last++;
  };

  someInstance.dequeue = function() {
    var item = storage[someInstance.first];
    delete storage[someInstance.first];
    someInstance.first++;
    return item;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
