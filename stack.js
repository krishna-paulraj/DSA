class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }
  pop() {
    this.items.pop();
  }
  size() {
    return this.items.length;
  }
  isEmpty() {
    return this.items.length === 0;
  }
  peek() {
    if (!this.isEmpty()) {
      console.log(this.items[this.items.length - 1]);
    } else {
      return null;
    }
  }
  print() {
    console.log(this.items.toString());
  }
}

const myStack = new Stack();

myStack.push(5);
myStack.push(10);
myStack.push(15);

myStack.print();
myStack.peek();

myStack.pop();

myStack.print();

myStack.peek();
