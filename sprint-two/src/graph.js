

// Instantiate a new graph
var Graph = function() {
  this.vertices = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.vertices.push([node])
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.vertices.length; i++) {
    if (this.vertices[i][0] === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.vertices.length; i++) {
    if (this.vertices[i][0] === node) {
      delete this.vertices[i][0]
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.vertices.length; i++) {
    if (this.vertices[i][0] === fromNode || this.vertices[i][0] === toNode) {
      if (this.vertices[i][1] === fromNode || this.vertices[i][1] === toNode) {
      return true;
  }
}
} return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  fromNode = parseInt(fromNode);
  toNode = parseInt(toNode);
  for (var i = 0; i < this.vertices.length; i++) {
    if (this.vertices[i][0] === fromNode) {
      this.vertices[i].push(toNode);
    }
  }

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

  for (var i = 0; i < this.vertices.length; i++) {
    if (this.vertices[i].length > 1) {
      for (var j = 0; j < this.vertices[i].length; j++) {
        if (this.vertices[i][0] === fromNode && this.vertices[i][1] === toNode) {
        delete this.vertices[i][j]
        }
      }
    }
  }
};

// Pass in a jcallback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.vertices.length; i++) {
    cb.apply(this, this.vertices[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


