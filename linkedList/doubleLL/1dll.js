//https://www.codingninjas.com/studio/problems/delete-all-occurrences-of-a-given-key-in-a-doubly-linked-list_8160461

function deleteAllOccurences(head,val){

  // let prev=null;
  let temp=head;

  while(temp){
    if(temp.data===val){
      //check for head
      if(temp===head){
         head=head.next
         head.prev = null;
         temp=head;
      }else{
        let prev=temp.prev;
        let next=temp.next;
        prev.next=next;
        if(next){
          next.prev=prev;
        }
        temp=next;
      }
    }else{
      temp=temp.next;
    }   
  }

  return head;

}

const { DoubleLinkedList} = require('./0dll');
const dll=new DoubleLinkedList();
dll.addArr(dll,[1,2,3,4,5])
dll.head=deleteAllOccurences(dll.head,5);
dll.printLR();
