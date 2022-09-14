var Stack = function() {
  var someInstance = {
    first: 0,
    last: 0
  };

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[someInstance.last] = value;
    someInstance.last++;
  };

  someInstance.pop = function() {
    // pop can only run if there is data available
    if (someInstance.last > 0) {
      someInstance.last--;
      var item = storage[someInstance.last];
      delete storage[someInstance.last];
      return item;
    }
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
