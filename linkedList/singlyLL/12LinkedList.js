//https://leetcode.com/problems/linked-list-cycle-ii/
//find the starting point of cycle of  LinkedList
//Sol 1 
//Use hashing
function detectStartCycle(head){
  let map=new Map();
  let temp=head;
  while(temp){
    if(map.has(temp)){
     head=temp;
     return head;
    }else{
     map.set(temp,1);
    }
    temp=temp.next;
  }
}
//Fsst and Slow Pointer
//understand the intution trying manually(see vdeo)
function detectStartCycle2(head){
//Step 1 detect the collositon
  let fptr=head;
  let sptr=head;
  while(fptr && fptr.next){
    fptr=fptr.next.next;
    sptr=sptr.next;
    if(fptr.data===sptr.data){
      break;
    }
  }
  console.log("fastptr",fptr);
  console.log("slowptr",sptr);

  //move ftr and sptr one by one to detect starting point
  sptr=head;
  while(fptr && fptr.next){
    if(fptr.data===sptr.data){
      return fptr;
    }
    fptr=fptr.next;
    sptr=sptr.next;
  }
  return null;
}

const { LinkedList } = require('./0linkedList.js')
const  {makeLinkedListCycle}=require("./9LinkedList.js");
let l1 = new LinkedList()
l1.addArr(l1,[1,3,0,4]);
makeLinkedListCycle(l1.head,1);
let startCycleNode=detectStartCycle2(l1.head);
console.log(startCycleNode);
