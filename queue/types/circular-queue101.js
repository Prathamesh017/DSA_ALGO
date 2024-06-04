
//! In Circular Queue , Tail's Next would be Head , Like A circle

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class CircularQueue{
   constructor(){
    this.head=null;
    this.tail=null;
    this.size=null;
   }

   //adding an element
   enqueue(data){
    const node=new Node(data);
    if(!this.head){
      //meand queue is empty
      this.head=node;
      this.tail=node;
    }else{
      this.tail.next=node;
      this.tail=node;
      node.next=this.head;
    }
    this.size++;
   }

   //deleting an element

   dequeue(){

    if(!this.tail){
      return null;
    }
    const deleteNode=this.tail;
    //if only one element is present
    if(this.tail===this.head){
      this.head=null;
      this.tail=null;
    }else{
      this.head=this.head.next;
      this.tail.next=this.head;
    }

    this.size--;
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
      if(temp.data===this.tail.data){
        break;
      }
      temp=temp.next;
    }
    return ans;
  }

}

const queue=new CircularQueue();
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
queue.dequeue();

const ans=queue.printQueue();
console.log(queue,ans);
