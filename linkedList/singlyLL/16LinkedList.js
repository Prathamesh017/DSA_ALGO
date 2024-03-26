// https://leetcode.com/problems/merge-k-sorted-lists/

//Can merge 2 at a time , once mege than [1,2] and [3] then [1,2,3] and 4 so and so for

//Most Optimized Soln- Priority queue
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

function mergeKSortedList(lists){

  let sortedList=lists[0];
  for (let i = 1; i < lists.length; i++) {
    sortedList=mergeSortedLL(sortedList,lists[i]);
  }
  return sortedList;

}

const { LinkedList,Node} = require('./0linkedList.js')
let l1 = new LinkedList()
l1.addArr(l1,[1,3,5,7]);
let l2 = new LinkedList()
l2.addArr(l1,[2,4,6,8]);
let l3 = new LinkedList()
l3.addArr(l1,[11,51,91,115]);
let l4 = new LinkedList()
l4.addArr(l1,[10,21,43,24,35]);
let sortedLists=mergeKSortedList([l1.head,l2.head,l3.head,l4.head])
console.log(sortedLists);