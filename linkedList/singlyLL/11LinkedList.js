//https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/description/

//Sol 1
//if the length is n , then middle will be n/2
function deleteMiddleNode(head){
  let length=0;
  let temp=head;
  while(temp){
   length=length+1;
   temp=temp.next;
  }
  let mid=Math.floor(length/2);
  let ctr=1;
  temp=head;
  while(temp){
   if(ctr==mid){
     temp.next=temp.next.next;
     break;
   }
   ctr++;
   temp=temp.next;
  }
}

//using fast and slw ptr
function deleteMiddleNode2(head){
  if(!head || !head.next){
     return head=null;
  }
  let sptr=head;
  let fptr=head.next.next;
  while(fptr?.next){
   fptr=fptr.next.next;
   sptr=sptr.next;
  }
  sptr.next=sptr.next.next;
  return head;
  
}





const { LinkedList } = require('./0linkedList.js')
let l1 = new LinkedList()
l1.addArr(l1,[1,2,3,4,5,6]);
deleteMiddleNode2(l1.head);
l1.print();