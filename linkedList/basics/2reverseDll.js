class Node {
  constructor(data) {
    this.data = data
    this.next = null
    this.prev = null
  }
}
class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  add(data) {
    let node = new Node(data)
    if (this.head) {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    } else {
      this.head = node
      this.tail = node
    }
  }
  printLR() {
    let currentFirstNode = this.head
    let element = ''
    while (currentFirstNode) {
      element += currentFirstNode.data + '->'
      currentFirstNode = currentFirstNode.next
    }
    console.log(element)
  
  }
  printRL() {
    let currentLastNode = this.tail

    let element = ''
    while (currentLastNode) {
      element += currentLastNode.data + '->'
      currentLastNode = currentLastNode.prev
    }
    console.log(element)
  }
  

  reverseDLL() {
    //no element or single element check
    if (this.head === null || this.head.next === null) {
      return
    }
    let current = this.head
    this.tail=current;
    let prev = null
    while (current !== null) {  
      prev = current.prev
      current.prev = current.next
      current.next = prev
      current = current.prev
    }
    
    this.head=prev.prev;
   
  }
}
const ll = new LinkedList()
ll.add(1)
ll.add(2)
ll.add(3)
ll.add(4)
ll.printLR();
ll.reverseDLL();
ll.printLR();

