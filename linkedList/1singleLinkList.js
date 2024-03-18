//Singly Linked List

class Node {
  // every new node initially will be null
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkList {
  //initalize a empty linked List
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  add(data) {
    const newNode = new Node(data);
    //if not head ,means first element , will have both head and tail pointing to it
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      //if not, then  current't tail's next will be this node
      //and tail will shift to next node
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  addAtHead(data) {
    let newNode = new Node(data);
    let head=this.head;
    newNode.next=head;
    this.head=newNode;
  }
  deleteAtHead(){
    let secondNode=this.head.next;
    this.head=secondNode;
  }
  addAtTail(data) {
    let newNode = new Node(data);
    if(this.head===null){
      return;
    }
    let current=this.head;
    while(current.next!==null){
      current=current.next;
    }
    current.next=newNode;
  }
  deleteAtTail(){
    //check if it has tail, to have a tail ,there should be atleast 2 element in linked list
   if(this.head===null || this.head.next===null){
     return null;
   }

   //we know that 2nd last element's next.next will be null as 2ndlast element next is last element and last element's next will be null
   let current=this.head;
   while(current.next.next!==null){
    current=current.next;
   }
   //here I will get current upto 2nd last index;
   //hence
   current.next=null;

  }
  addAtAnyPositon(data,pos) {
    let newNode = new Node(data);
    if(pos===1){
      newNode.next=this.head;
      this.head=newNode;
      return;
    }
    let counter=1;
    let current=this.head;
    let prev=null;
    while(current){
      if(counter===pos){
        prev.next=newNode;
        newNode.next=current;
        break;
      }
      //adding at last
      if(current.next==null && pos===counter+1){
        current.next=newNode;
        break;
      }
      counter++;
      prev=current;
      current=current.next;
    }
    

   
  }
  deleteAtAnyPositon(pos){
     if(this.head===null){
      return null;
     }
     //will delete the first
     if(pos===1){
      let secondNode=this.head.next;
      this.head=secondNode;
      return ;
     }
     //at any
     let prev=null;
     let current=this.head;
     let counter=1; //we have already check for 1 but we have to transverse all linkedlist none the less ,hence counter 1
     while(current){
       if(pos==counter){
          //[prev->1,current->2,current.next.next->>3]
          let currenNext=current.next; 
          prev.next=currenNext;
          break;
       }
       counter++;
       prev=current;
       current=current.next;
     }
  }
  print() {
    let currentFirstNode = this.head;
    let element="";
    while (currentFirstNode) {
      element+=currentFirstNode.data+"->"
      currentFirstNode = currentFirstNode.next;
    }
    console.log(element);
  }
}
//Initalize a empty Linkedlist
const linkList = new LinkList();
for (let i = 1; i <5; i++) {
  linkList.add(i);
}
// linkList.add(2);
// linkList.add(3);
linkList.print();
linkList.print();
linkList.addAtAnyPositon(4,5)
linkList.print();
