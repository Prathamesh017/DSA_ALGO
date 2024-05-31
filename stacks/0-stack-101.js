//Stack Implemented Through LinkedList provides more abstraction and more control than using array
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.top = null; // Top element of the stack (initially null)
  }

  push(item) {
    const newNode = new Node(item);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (!this.top) {
      return undefined; // Return undefined if the stack is empty
    }
    const removedNode = this.top;
    this.top = this.top.next;
    return removedNode.data;
  }

  peek() {
    if (!this.top) {
      return undefined; // Return undefined if the stack is empty
    }
    return this.top.data;
  }

  isEmpty() {
    return this.top === null; // Check if the top element is null (empty stack)
  }
}
module.exports = { Stack,Node}