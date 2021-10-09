
function Queue() {
    //properties and methods go here
    let items = [];
  
    // create enqueue(element(s)): this adds a new item(or several items) at the back of the queue
    this.enqueue = function(element) {
      items.push(element);
    };
  
    // dequeue(): this removes the first item from the queue
    this.dequeue = function() {
      return items.shift();
    };
  
    // front(): this returns the first element from the queue. The first one added, and will be removed from the queue.
    this.front = function() {
      return items[0];
    };
  
    // isEmpty(); this returns true if the queue doesn't contain any elements, and false if the queue is bigger than 0.
    this.isEmpty = function() {
      return items.length == 0;
    };
  
    // size(): this returns the number of elements the queue contains.
    this.size = function() {
      return items.length;
    };
  
    this.print = function() {
      console.log(items.toString());
    };
  }