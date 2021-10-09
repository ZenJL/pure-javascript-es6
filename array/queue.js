class Queue {
  constructor() {
      this.items = []
  };

  enqueue(element) {
      this.items.push(element);
  };

  dequeue() {
      this.items.shift();
  };

  front() {
      return this.items[0]
  };

  isEmpty() {
      return this.items.length === 0
  };
  clear() {
      return this.items = [];
  }
  size() {
      return this.items.length;
  }
}
