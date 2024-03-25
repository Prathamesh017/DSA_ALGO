//https://www.codingninjas.com/studio/problems/add-one-to-a-number-represented-as-linked-list_920557

//Add 1 to the linkedlist 1->5>9 wil be 1->6->0

/*1st solution
Step 1- reverse ll -1->5->9 will be 9->5->1
Step 2 add one and keep the carry   9->5->1 will be 0->6->1
reverse again  0->6->1 wil be 1->6->0
T.C - 3(N)
*/

//Sol2 with backtracking
const { LinkedList,Node } = require('./0linkedList.js')
function addOneToLinkListHelper(head){
  if(head===null){
    return 1;
  }
  let carry=addOneToLinkListHelper(head.next);
  let sum=(head.data+carry);
  head.data=sum%10;
  return Math.floor((sum/10))
}

function addOneToLinkList(head){
//divided into 2 func because like this because we need the last carry as Well
  let carry=addOneToLinkListHelper(head);
  if(carry){
    let newNode= new Node(carry);
    newNode.next=head;
    head=newNode;
  }
  return head;

}


let ll = new LinkedList()
ll.addArr(ll,[9,9,2]);
ll.head=addOneToLinkList(ll.head);
ll.print();




