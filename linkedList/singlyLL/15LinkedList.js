//https://leetcode.com/problems/rotate-list/description/


function rotateLL(head,k){
  let temp=head;
  let length=0;
  while(temp){
    temp=temp.next;
    length++;
  }

  k=k%length;
  if(k===0){
    return head;
  }
  let ctr=1;
  let newTailLength=length-k;
  let newTail;
  temp=head;
  while(temp){
    if(ctr===newTailLength){
       newTail=temp;
    }
    if(temp.next===null){
      temp.next=head;
      head=newTail.next;
      newTail.next=null;
      return head;
    }
    temp=temp.next;
    ctr++;
  }
  return head;

}




const { LinkedList,Node} = require('./0linkedList.js')
let l1 = new LinkedList()
l1.addArr(l1,[1,2,3,4,5]);
l1.head=rotateLL(l1.head,12);
l1.print();
console.log(1%2);
