// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

//1st approach - simple find counter, then remove
//Simple, Time Complexity- O(2N)

//understand the intution 
//the fast pointer already covers the difference 
function removeNNode(head,n){
  let fastPointer=head;
  let counter=0;
  while(counter!==n){
     fastPointer=fastPointer.next;
     counter++;
  }
  if(fastPointer===null){
    head=head.next;
    return head;
  }
  let slowPointer=head;
  while(fastPointer.next!==null){
     slowPointer=slowPointer.next;
     fastPointer=fastPointer.next;
  }
  slowPointer.next=slowPointer.next.next;
  return head;
}

const { LinkedList } = require('./0linkedList.js')
let ll = new LinkedList()
ll.addArr(ll,[1,2,3,4,5,6]);
ll.head=removeNNode(ll.head,5);
ll.print();