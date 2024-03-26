//https://www.codingninjas.com/studio/problems/remove-duplicates-from-a-sorted-doubly-linked-list_2420283


function removeDuplicates(head){
 
  let prev=null;
  let temp=head;
  while(temp){
    if(temp.data===prev?.data){
      let next=temp.next;
      prev.next=next
      if(next){
        next.prev=prev;
      }
      temp=next;
    }else{
      prev=temp;
      temp=temp.next;
    }
  }

  return head;
}


const { DoubleLinkedList } = require('./0dll')
const dll = new DoubleLinkedList()
dll.addArr(dll, [1,1,1,2,2,3,4,4,5,5])
removeDuplicates(dll.head);
dll.printLR();
