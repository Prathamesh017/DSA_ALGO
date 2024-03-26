// https://leetcode.com/problems/copy-list-with-random-pointer


const { LinkedList,Node} = require('./0linkedList.js')
function assignRandomPtr(head){
  // Include the class Node definition here
  if (!head) return null;

  // Step 1: Duplicate nodes and insert them into the original list.
  let current = head;
  while (current) {
      const newNode = new Node(current.data);
      newNode.next=current.next
      current.next = newNode;
      current = newNode.next;
  }

  // Step 2: Adjust random pointers of copied nodes.
  current = head;
  while (current) {
      if (current.random) {
          current.next.random =new  Node(current.random.data);
      }
      current = current.next.next;
  }

  // Step 3: Split the merged list into two separate lists.
  current = head;
  let newHead = head.next;
  let newCurrent = newHead;
  while (current) {
      current.next = newCurrent.next;
      current = current.next;
      if (current) {
          newCurrent.next = current.next;
          newCurrent = newCurrent.next;
      }
  }

  return newHead;

  
};







let l1 = new LinkedList()
l1.addRandom([1,3,5,7]);
let copiedLL=assignRandomPtr(l1.head);
console.log(copiedLL);
l1.print();