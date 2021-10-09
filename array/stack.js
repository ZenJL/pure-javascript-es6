class Stack {
  constructor() {
    this.items = []
  }

  push(value) {
    this.items.push(value)
  }

  print() {
    return this.items;
  }

  pop() {
    this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0
  }

  clear() {
    return this.items = []
  }

  size() {
    return this.items.length
  }
}

// isEmpty (): return true if the stack doesn’t contain any elements, false if the size bigger than 0.


const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

stack.pop();
stack.pop();


const res = stack.print();
console.log('stack: ', res)


const peek = stack.peek();
console.log('peek: ', peek)

const isEmpty = stack.isEmpty();
console.log('isEmpty: ', isEmpty)
