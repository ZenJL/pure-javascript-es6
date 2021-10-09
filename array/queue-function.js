// PUSH & POP  = STACK DATA STRUCTURE

function Stack() {
    // properties and methods go here
    let items = [];
  
    /* Pushing elements to the stack
    - First method that we will implement is the push method.
    - This method is responsible for adding new elements to the stack.
    - We can only add new items to the top of the stack, meaning at the end of the stack.
    */
    this.push = function(element) {
      items.push(element);
    };
  
    /* Popping elements from the stack
    - Next, we are going to implement the pop method.
    - This method is responsible removing the items from the stack.
    */
    this.pop = function(element) {
      return items.pop();
    };
  
    /* Peeking the element from the top of the stack
    - We would like to know what the last item added to our stack.
    */
    this.peek = function() {
      return items[items.length - 1];
    };
  
    /* Verifying if the stack is empty
    - Next is isEmpty method which returns true if the stack is empty.
    */
  
    this.isEmpty = function() {
      return items.length == 0;
    };
  
    this.size = function() {
      return items.length;
    };
  
    /* Clearing & printing the elements of the stack.
    - Finally, we are going to implement the clear method.
    - This method simply empties the stack, removing all its elements.
    */
    this.clear = function() {
      items = [];
    };
  
    this.print = function() {
      return items.toString();
    };
  }
  
  let stack = new Stack();
  stack.push(5);
  stack.push(8);
  stack.push(11);
  stack.push(15);
  stack.pop();
  stack.pop();
  
  console.log("list item: ", stack.print());
  console.log("last item pushed: ", stack.peek());
  console.log("stack empty: ", stack.isEmpty());
  console.log("stack size: ", stack.size());