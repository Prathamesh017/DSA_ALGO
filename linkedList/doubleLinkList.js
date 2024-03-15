//Double Link List
class Node {
  // every new node initially will be null
  constructor(data) {
    this.data = data
    this.next = null
    this.prev = null
  }
}
class LinkList {
  //initalize a empty linked List
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  add(data) {
    const newNode = new Node(data)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail = newNode
    }
  }
  deleteHead() {
    if (this.head === null) {
      return
    }
    let current = this.head
    //if only 1 element is present in arr
    if (current.next === null && current.prev === null) {
      this.head = null
      this.tail = null
      return
    }

    this.head = current.next
    this.head.prev = null
  }
  addAtHead(data) {
    let node=new Node(data);
    if (this.head === null) {
      this.head=node;
      return;
    }
    let current = this.head
    current.prev=node;
    node.next=current;
    this.head=node;

  }
  deleteTail() {
    //check if it has tail, to have a tail ,there should be atleast 2 element in linked list
    if (this.head === null || this.head.next === null) {
      return null
    }
    let current = this.head
    // iterate till 2nd last
    while (current.next.next !== null) {
      current = current.next
    }
    //now I have to second last element at current;
    current.next = null
    this.tail = current
  }
  addJustBeforeTail(data) {
    let node=new Node(data);
    //check if it has tail, to have a tail ,there should be atleast 2 element in linked list
    if (this.head === null || this.head.next === null) {
      return null
    }
    let current = this.head
    // iterate till 2nd last 
    while (current.next.next!== null) {
      current = current.next
    }
    //now I have to 2nd last element at current;
    let nextNext=current.next; //last element;
    current.next =node;
    node.prev=current;
    node.next=nextNext;
    nextNext.prev=node;
  }
  deleteAtAnyPositon(pos) {
    let current = this.head
    if (!current) {
      return
    }
    let counter = 1
    while (current) {
      if (counter === pos) {
        //Only if 1 node is present
        if (current.next === null && current.prev === null) {
          this.head = null
          this.tail = null
          break;
        }
        //for head
        else if (current.prev === null) {
          let nextNode = current.next
          nextNode.prev = null
          this.head = nextNode
          break;
        }else if(current.next===null){
          let prev=current.prev;
          prev.next=null;
          this.tail=prev;
          break;
        } else {
          let prev = current.prev
          let next=current.next;
          prev.next = next;
          next.prev=prev;
          return;
        }
      }
      counter++
      current = current.next
    }
  }
  addAtAnyPositon(data,pos) {
    let node=new Node(data);
    let current = this.head
    if (!current) {
      this.head=node;
      this.tail=node;
      return
    }
    let counter = 1
    while (current) {
      //if not understand try dry run
      if (counter === pos-1) {
        //for head is present
        if (pos===0) {
          this.addAtHead(data);
          break;
        }
          //for head is present
        else if(current.next===null){
          this.add(data);
          break;
        } else {
          let next = current.next;
          //setting prev of node
          current.next=node;
          node.prev=current;
          //setting next of node
          node.next=next;
          next.prev=node;
          return;
        }
      }
      counter++
      current = current.next
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
}

const dll = new LinkList()
dll.add(1)
dll.add(2)
dll.add(4)
dll.addAtAnyPositon(13,5);
// dll.add(4)
dll.printLR()
dll.printRL()

