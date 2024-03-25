//https://www.codingninjas.com/studio/problems/find-length-of-loop_8160455
//Length of the Loop
//Sol-1 is Hashing
function getLengthofLoopHashing(head){
  let map=new Map();
  let temp=head;
  let ctr=1;
  //we will keep incrementing the counter till we get the first elment which occur 2 so that we can find out the loop
  //we can get the loop length by subtracting the current ctr which is the second occurence and the firstOccurence
  while(temp){
    if(map.has(temp.data)){
     let firstOccurence=map.get(temp.data);
     return ctr-firstOccurence;
    }else{
     map.set(temp.data,ctr);
     ctr=ctr+1;
    }
    temp=temp.next;
  }
}

//Soln2 -using slow and fast ptr;
//Step 1 - detect loop by using slow and fast ptr;
//Step 2 - once got the point of interaction which can be any element of the loop
//Step 3- iteater again till the intersection element to find the length




const { LinkedList } = require('./0linkedList.js')
const  {makeLinkedListCycle}=require("./9LinkedList.js");
let l1 = new LinkedList()
l1.addArr(l1,[4,10,3,5,10]);
makeLinkedListCycle(l1.head,2);
let lengthLoop=getLengthofLoopHashing(l1.head);
console.log(lengthLoop)