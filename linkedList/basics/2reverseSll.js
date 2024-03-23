//Understnad recursion better to understand this
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
    this.length = 0
  }
  add(data) {
    let node = new Node(data)
    if (this.head) {
      this.tail.next = node
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

  reverseSLL() {
    //no element or single element check
    if (this.head === null || this.head.next === null) {
      return this.head
    }
    let current = this.head
    let prev = null
    while (current !== null) {
      let next = current.next //save next for refrence; 2->3->4
      current.next = prev //1->null
      prev = current //prev=1;
      current = next //2->3->4
    }
    this.head=prev;
  }
  reverseSLLRec(head) {
    if(head===null || head.next===null){
      return head;
    }
    const reversedLinkedList=this.reverseSLLRec(head.next);
    let currentFront=head.next;
    currentFront.next=head;
    head.next=null;
    return reversedLinkedList;

  }
}
const ll = new LinkedList()
ll.add(1)
ll.add(2)
ll.add(3)
ll.printLR()
let pt=ll.reverseSLLRec(ll.head);
ll.head=pt;
ll.printLR()

