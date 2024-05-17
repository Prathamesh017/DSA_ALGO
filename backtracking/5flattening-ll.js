//Flattening a Linked List with recursion
//! Handling LinkedList with SubLinkedList 
class Node{
  constructor(data){
    this.value=data;
    this.next=null;
    this.bottom=null;
  }
}
class LinkedList{
  constructor(){
    this.head=null;
    this.tail=null;
    this.length=0;
  }
  
  addBottom(data){
    const node=new Node(data);
    if(this.head){
      this.tail.bottom=node;
      this.tail=node;
      this.length+=1;

    }else{
      this.head=node;
      this.tail=node;
      this.length+=1;
    }
  }
  handleSubLinkedList(ll,arr){
    for (let i = 0; i < arr.length; i++) {
      const linkedList=new LinkedList();
      for (let j = 0; j < arr[i].length; j++) {
          linkedList.addBottom(arr[i][j])
      }
      if(ll.head){
        ll.tail.next=linkedList.head;
        ll.tail=linkedList.head;
      }else{
        ll.head=linkedList.head;
        ll.tail=linkedList.head;
      }
    }
    return ll;
  }
}

const arr=[
  [2,5,7,8,30],
  [10,15,20],
  [19,23,27,50],
  [22,40,45,],
]
const linklist=new LinkedList();
linklist.handleSubLinkedList(linklist,arr);

//!handled 
function mergedLL(linkedList1,linkedList2){
  if(!linkedList1){
    return linkedList2;
  }else if(!linkedList2){
    return linkedList1
  }
  let mergedLinkedList=new Node(-1);
  let tail=mergedLinkedList;
  while(linkedList1 && linkedList2){
    if(linkedList1.value<linkedList2.value){
      tail.bottom=linkedList1;
      tail=linkedList1;
      linkedList1=linkedList1.bottom;
    }else{
      tail.bottom=linkedList2;
      tail=linkedList2;
      linkedList2=linkedList2.bottom;
    }
  }
  if(linkedList1 || linkedList2){
    tail.bottom=linkedList1?linkedList1:linkedList2
  }
  return mergedLinkedList.bottom;
}


function mergedLLRecursively(linkedList1,linkedList2){
  if(!linkedList1){
    return linkedList2;
  }else if(!linkedList2){
    return linkedList1
  }
  let mergedLinkedList=new Node(-1);
  // let tail=mergedLinkedList;

  if(linkedList1.value<linkedList2.value){
    mergedLinkedList.bottom=linkedList1;
    mergedLinkedList.bottom.bottom=mergedLLRecursively(linkedList1.bottom,linkedList2);
  }else{
    mergedLinkedList.bottom=linkedList2;
    mergedLinkedList.bottom.bottom=mergedLLRecursively(linkedList1,linkedList2.bottom);
  }
  return mergedLinkedList.bottom;
}



function flattenSortLL(ll){
  //base case , recursion will go on till tail and once we reach there we will start mergin
  if(ll===null){
    return null;
  }

  let ll2=flattenSortLL(ll?.next);
  // return mergedLL(ll,ll2);
  return mergedLLRecursively(ll,ll2)
}



let res=flattenSortLL(linklist.head);
while(res){
  console.log(res.value);
  res=res.bottom;
}
