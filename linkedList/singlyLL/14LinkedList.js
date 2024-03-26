//Hard
//https://leetcode.com/problems/reverse-nodes-in-k-group/

//reverse in groups

function findKthNode(head,k){
 let temp=head;
 let ctr=1;
 while(temp){
   if(ctr===k){
    return temp
   }else{
    ctr++;
    temp=temp.next;
   }
 }
 return temp;

}
function reverseNode(head,kthNode){
  let temp=head;
  let prev=null;
  while(temp!==kthNode && temp){
    let next=temp.next;
    temp.next=prev;
    prev=temp;
    temp=next;
  }
  return prev;

}

function reverseNodeInKGroup(head,k){
 let temp=head;
 let prev=null;
 let nextNode=null;
  while(temp){
    let kthNode=findKthNode(temp,k);
    if(!kthNode){
      if(prev){
        prev.next=temp;
        return head;
        break;
      }
    }
    nextNode=kthNode.next;
    kthNode.next=null;
    let reverseKthNode=reverseNode(temp,nextNode);
    //this is my first group;
    if(head===temp){
       head=reverseKthNode;
    }
    else{
      prev.next=reverseKthNode;
    }
    prev=temp;
    temp=nextNode;
  }
  return head;

}




const { LinkedList,Node} = require('./0linkedList.js')
let l1 = new LinkedList()
l1.addArr(l1,[1,2,3,4,5]);
l1.head=reverseNodeInKGroup(l1.head,1);
l1.print();

