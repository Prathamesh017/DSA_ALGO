// https://leetcode.com/problems/intersection-of-two-linked-lists/

//Sol 1 - 
//we have to make them start from the same point right so we can find the point of collesion easily
function interSection(head1,head2){

  function findLengthOfLinkedList(head){
    let counter=0;
    let temp=head;
    while(temp){
      temp=temp.next;
      counter++;
    }
    return counter;
  }
  function findColosition(smallLL,largerLL,difference){ 
  
   let tempOfLargerLL=largerLL
   //we will move larger forward by reducing the difference to 0
   //so that our smaller and large will be of equal length
    while(difference){
      tempOfLargerLL=tempOfLargerLL.next;
      difference--;
    }
    //both are equal , so can find point of collesion more easily
  
    let tempOfSmallerLL=smallLL;
    while(tempOfLargerLL && tempOfSmallerLL){
      if(tempOfLargerLL.data===tempOfSmallerLL.data){
        return tempOfLargerLL;
      }
      tempOfLargerLL=tempOfLargerLL.next;
      tempOfSmallerLL=tempOfSmallerLL.next;
    }
    return null;
  }

  let head1Length=findLengthOfLinkedList(head1);
  let head2Length=findLengthOfLinkedList(head2);

  if(head1Length<head2Length){
   let collisition=findColosition(head1,head2,head2Length-head1Length);
   return collisition;
  }
  else{
    let collisition=findColosition(head2,head1,head1Length-head2Length);

    return collisition;
  }

  
}

function intersection2(headA,headB){
 //basically we will keep iterating temp1 and temp2 till they reach zero 
 //once they become null we will point temp1 to headB and temp2 to headA so we will intersect at one time
 //for eg - [temp1=[4,1,8,4,5][5,6,1,8,4,5]
 //for eg - temp2= [5,6,1,8,4,5] 4,1,8,4,5]
 // if we iterate both simulatenoulsy  we will reach the interaction at one point 5+6==6+5 

    let temp1 = headA
    let temp2 = headB
    while(temp1?.data != temp2?.data){  
      if(temp1) temp1 = temp1.next 
      else temp1 = headB 
      if(temp2) temp2 = temp2.next 
      else temp2 = headA
  }     
    return temp1;
  
}




const { LinkedList } = require('./0linkedList.js')
let temp1 = new LinkedList()
temp1.addArr(temp1,[4,1,8,4,5]);
let temp2 = new LinkedList()
temp2.addArr(temp2,[5,6,1,8,4,5]);
let intersection=intersection2(temp1.head,temp2.head);
console.log(intersection);

