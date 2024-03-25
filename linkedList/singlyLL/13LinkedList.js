//https://leetcode.com/problems/merge-two-sorted-lists/description/

//Sol 1 - Hashing
//Step -1 compare and merge the values of the linkedlist in one array
//Step -2 once we get the array which is already sorted ,create and Insert 

//Soln 2
const { LinkedList,Node} = require('./0linkedList.js')
function mergeSortedLL(head1,head2){
 let temp1=head1;
 let temp2=head2;
 let mergedLL=new Node(-1);
 let tail=mergedLL;

 while(temp1 && temp2){
   if(temp1.data<temp2.data){
    tail.next=temp1;
    tail=temp1;
    temp1=temp1.next;
   }else{
    tail.next=temp2;
    tail=temp2;
    temp2=temp2.next;
   }
  }
   
  tail.next=temp1?temp1:temp2;
  
   return mergedLL.next;
}


let l1 = new LinkedList()
l1.addArr(l1,[1,3,5,7]);
let l2 = new LinkedList()
l2.addArr(l2,[2,4,6,8]);
l1.head=mergeSortedLL(l1.head,l2.head);
l1.print();
