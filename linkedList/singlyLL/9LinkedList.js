//https://leetcode.com/problems/linked-list-cycle/

//Soln 1- Hashing 
//we can store values as we move forward and check if already exists if found ,there is a loop 

//Soln 2- Fast and Slow Pointer, In A loop  , faster and slow pointers are bound to interact

function makeLinkedListCycle(head,pos){
  let temp=head;
  let loopStarterNode;
  while(temp){
    if(pos===0){
       loopStarterNode=temp;
       break;
    }
    temp=temp.next;
    pos--;
  }
  temp=head;
  while(temp){
    if(temp.next===null){
      temp.next=loopStarterNode;
      break;
    }
    temp=temp.next;
  }
  return temp;
  
}

function detectLinkedListCycle(head){
  let fptr=head.next.next;
  let sptr=head;

  while(fptr && fptr.next){
    if(fptr.data===sptr.data){
      return true;
      break;
    }
    fptr=fptr.next.next;
    sptr=sptr.next;
  }

  return false;
}



const { LinkedList } = require('./0linkedList.js')
let l1 = new LinkedList()
l1.addArr(l1,[-21,10,17,8,4,26,5,35,33,-7,-16,27,-12,6,29,-12,5,9,20,14,14,2,13,-24,21,23,-21,5]);
makeLinkedListCycle(l1.head,3);
let isCycle=detectLinkedListCycle(l1.head);
console.log(isCycle);

module.exports = {makeLinkedListCycle}
