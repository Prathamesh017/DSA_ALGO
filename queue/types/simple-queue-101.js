//Queue Implemented Through LinkedList provides more abstraction and more control than using array
class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}
class Queue {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  //enqueue -> adding data;
  enqueue(data) {
    const node = new Node(data)
    //it there is tail , this will be new one at the end
    if (this.tail) {
      this.tail.next = node
    }
    this.tail = node
    if (!this.head) {
      this.head = node
    }
    this.size++
  }

  //dequeue => delete data
  dequeue() {
    //no head , can't delete anything
    if (!this.head) {
      return null
    }
    //storing value to return before deletion
    const deletedNode = this.head

    //changing head;
    this.head = this.head.next

    //if not more presents,make tail null as well
    if (!this.head) {
      this.tail = null
    }
    this.size--

    return deletedNode.data
  }

  // Check the element at the front of the queue
  peek() {
    if (!this.head) {
      return null
    }
    return this.head.data
  }
  peekTail() {
    if (!this.tail) {
      return null
    }
    return this.tail.data
  }
  isEmpty() {
    return this.size === 0;
  }
  // Get the size of the queue
  getSize() {
    return this.size;
  }
  printQueue(){
    let temp=this.head;
    const ans=[];
    while(temp){
      ans.push(temp.data);
      temp=temp.next;
    }
    return ans;
  }
}

// Time Complexity - 0(1) for every operation
const pt = new Queue()
pt.enqueue(1)
pt.enqueue(4)
pt.enqueue(3)
pt.dequeue()
const front=pt.peek()
const tail=pt.peekTail()
const queues=pt.printQueue();
console.log(pt,front,tail,queues)
