/* A priority queue is a type of queue that arranges elements based on their priority values. The important point to remember is that the  highest priority values are at head so that it can be retrieved quickly  

When you add an element to the queue, it is inserted in a position based on its priority value. For example, if you add an element with a high priority value to a priority queue, it may be inserted near the front of the queue, while an element with a low priority value may be inserted near the back. 

There are several ways to implement a priority queue, including using an array, linked list, heap, or binary search tree. Each method has its own advantages and disadvantages, and the best choice will depend on the specific needs of your application.


* Properties of Priority Queue
So, a priority Queue is an extension of the queue with the following properties. 
Every item has a priority associated with it.
An element with high priority is dequeued before an element with low priority.
If two elements have the same priority, they are served according to their order in the queue.

* Advantages/Dis Of LinkedList Based Priority Queue
 Pros
 LinkedList can grow and shrink , hence useful
 Cons
 Insertion  and Updation with case medium priortity appearing in middle would take time
*/


class Node{
  constructor(data,priority){
   this.data=data;
   this.priority=priority;
   this.next=null;
  }
}

class PriorityQueue{
  constructor(){
    this.head=null;
    this.tail=null;
    this.size=0;
  }
  isEmpty() {
    return this.head === null;
  }
  enqueue(data,priority){
    //check if the head exist or has less priority then new one;
    const node=new Node(data,priority);

    if(this.isEmpty()){
      this.head=node;
      this.tail=node;
    }else if(priority<=this.tail.printQueue){
      //this will be my new node as this has lower priorty than my current tail 
      this.tail.next=node;
      this.tail=node;
    }else{
      let current=this.head;
      while(current.next!==null && priority<=current.next.priority){
        current=current.next;
      }
      //here's current  priority is bigger than that of the node;
      node.next=current.next;
      current.next=node;
    }

    this.size++; 
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const deleteNode = this.front;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null; // Update tail if queue becomes empty
    }
    return deleteNode.element;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.head.element;
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


const printQueue=new PriorityQueue();
printQueue.enqueue(1,3);
printQueue.enqueue(3,1);
printQueue.enqueue(2,2);
const ans=printQueue.printQueue();
console.log(ans);
//Learn About Implementing priority queue with heap(arr) and binary tree as well 