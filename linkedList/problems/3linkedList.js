//https://www.codingninjas.com/studio/problems/sort-linked-list-of-0s-1s-2s_1071937

// import LinkedList from "./2linkedList.js"
const { LinkedList } = require('./0linkedList.js')
//T(2N)
function sortLinkedList(head) {
  let temp = head
  let zeros = 0,
    ones = 0,
    twos = 0
  while (temp) {
    if (temp.data === 0) {
      zeros++
    } else if (temp.data === 1) {
      ones++
    } else {
      twos++
    }
    temp = temp.next
  }
  temp = head
  while (temp) {
    if (zeros) {
      temp.data=0;
      zeros--
    }else if (ones){
      temp.data=1;
      ones--
    } else {
      temp.data=2;
      twos--
    }
    temp = temp.next
  }
}
//T(ON)
function sortLinkedListBt(head){

  if(!head || !head.next){
    return head;
  }
  //three linkedList
  let zeroLL=new LinkedList();
  zeroLL.add(-1);
  let oneLL=new LinkedList();
  oneLL.add(-1);
  let twoLL=new LinkedList();
  twoLL.add(-1);
  //for iteration
  let zero=zeroLL.head;
  let one=oneLL.head;
  let two=twoLL.head;
  //maintaining head
  let zerohead=zeroLL.head;
  let onehead=oneLL.head;
  let twohead=twoLL.head;
  let temp=head;
  debugger;
  // console.log(one,two,zero);
  while(temp){
    if(temp.data===0){
       zero.next=temp;
       zero=zero.next;
    }
    else if(temp.data===1){
      one.next=temp;
      one=one.next;
    }
    else if(temp.data===2){
    two.next=temp;
    two=two.next;
    }
    temp=temp.next;
  }
  
  //check if exist or not
  zero.next=(onehead.next)?onehead.next:twohead.next;
  one.next=twohead.next;
  two.next=null;




  



}
let ll = new LinkedList()
ll.addArr(ll,[0, 0, 1, 2, 1, 1, 2, 0, 1, 2])
ll.print();
sortLinkedListBt(ll.head);
ll.print();

