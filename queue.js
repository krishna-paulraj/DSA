class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    return this.items.shift();
  }
  isEmpty() {
    return this.items.length === 0;
  }
  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    } else {
      return null;
    }
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.toString());
  }
}

const myQueue = new Queue();

myQueue.enqueue(5);
myQueue.enqueue(10);
myQueue.print();
myQueue.enqueue(15);
myQueue.dequeue();
myQueue.print();
