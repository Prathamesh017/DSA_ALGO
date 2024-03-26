class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}
class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }
  add(data) {
    const newNode = new Node(data)
    if (this.head) {
      this.tail.next = newNode
      this.tail = newNode
    } else {
      this.head = newNode
      this.tail = newNode
    }
  }
  addArr(ll, arr) {
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i]
      ll.add(element)
    }
  }
  addRandom(arr){
   const nodes = arr.map(val => new Node(val));
   // Link nodes
   for (let i = 0; i < nodes.length - 1; i++) {
     nodes[i].next = nodes[i + 1];
    }
   for (let i = 0; i < nodes.length; i++) {
     const randomIndex = Math.floor(Math.random() * nodes.length);
     nodes[i].random = nodes[randomIndex];
    }

    this.head=nodes[0];
 
  }
  print() {
    let currentFirstNode = this.head
    let element = ''
    while (currentFirstNode) {
      element += currentFirstNode.data + '->'
      currentFirstNode = currentFirstNode.next
    }
    console.log(element)
  }
}

const l1=new LinkedList();
l1.addRandom([1,2,3]);
module.exports = { LinkedList,Node }
