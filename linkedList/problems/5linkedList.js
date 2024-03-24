//Hare and Tortoise ALgo
//SImple Logic - Fast Pointer travels 2x while Slow Travels x
//SO By the time faster reaches last slow will reach middle 
//Used to middle of the linked list
//https://leetcode.com/problems/middle-of-the-linked-list/

function findMiddleNode(head){
  let fastPointer=head;
  let slowPointer=head;

  while(fastPointer && fastPointer.next){
    fastPointer=fastPointer.next.next;
    slowPointer=slowPointer.next;
  }
  head=slowPointer;
  return head;

}

const { LinkedList } = require('./0linkedList.js')
let ll = new LinkedList()
ll.addArr(ll,[1,2,3,5,6]);
ll.head=findMiddleNode(ll.head);
ll.print();