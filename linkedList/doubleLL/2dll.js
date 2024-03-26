//https://www.codingninjas.com/studio/problems/find-pairs-with-given-sum-in-doubly-linked-list

//Sol 1 - Brute Force with 2 loops

function findSumPairs(head, sum) {
  let map = new Map()
  let temp = head
  while (temp) {
    let temp2 = temp.next
    while (temp2) {
      if (temp.data + temp2.data === sum) {
        map.set(temp.data, temp2.data)
      } else if (temp.data + temp2.data > sum) {
        break
      }
      temp2 = temp2.next
    }
    temp = temp.next
  }

  return map
}
//SOln 2 pointer approach
function  findSumPairs2(head ,sum){
  function findTail(head){
    let tail=head;
    while(tail.next){
      tail=tail.next;
    }
    return tail;
  }
  let map = new Map()
  let tail=findTail(head);
  let start=head;
  //as a know linkedList is sorted start.data<tail.data
  while(start.data<tail.data){
    if(start.data+tail.data===sum){
      map.set(start.data,tail.data);
      start=start.next;
      tail=tail.prev;
    }
    else if(start.data+tail.data>sum){
      tail=tail.prev;
    }else{
      start=start.next;
    }
  }
  return map;




}

const { DoubleLinkedList } = require('./0dll')
const dll = new DoubleLinkedList()
dll.addArr(dll, [1,2,4,7,8,9])
let pairs=findSumPairs2(dll.head,9)
console.log(pairs);