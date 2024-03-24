// https://leetcode.com/problems/palindrome-linked-list
//1st Way 
//Time Complexity - O(n)+O(n/2)
//Space Complexity - O(m)
function checkIsPalindrome(head){
let values=[];
 let temp=head;
  while(temp){
    values.push(temp.data)
    temp=temp.next;
  }
  let start=0;let end=values.length-1;
  while(start<end){
    if(values[start]!==values[end]){
      return false;
      break;
    }
    start++;
    end--
    
  }

  return true;

}

//2nd Way
//TimeComplexity- using 3 half iteations so O(n/2)+O(n/2)+O(n/2)
//Space - O(1)
function reverseLinkedList(head){
  let temp=head;
  let prev=null;
  while(temp){
   let next=temp.next;
   let current=temp;
   current.next=prev;
   prev=current;
   temp=next;
  }
  return prev;

}

function checkIsPalindrome2(head){
  //find the middle by hareAndTortoise
  let fastPointer=head;
  let slowPointer=head;

  //for odd - it should till last ie fastPointer.next
  //for even- it should till second last ie fastPointer.next.next
  //so that our slow will be in middle
  while(fastPointer.next!=null && fastPointer.next.next!=null){
    fastPointer=fastPointer.next.next;
    slowPointer=slowPointer.next;
  }

  //slowpointer will be at middle,so it's next will be head of the reverse linked list;
  let reverse=reverseLinkedList(slowPointer.next);
  console.log(reverse);
  let temp=head;
  while(reverse){
    if(temp.data!==reverse.data){
      return false;
    }
    temp=temp.next;
    reverse=reverse.next;
  }
  return true;

}








const { LinkedList } = require('./0linkedList.js')
let ll = new LinkedList()
ll.addArr(ll,[1,2,2,1,1]);
let palindrome=checkIsPalindrome2(ll.head);
console.log(palindrome);