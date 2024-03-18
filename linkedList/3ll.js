//https://leetcode.com/problems/add-two-numbers/description/
//Remember- if want to create a new ll as ans always keep a dummy node at beginning can return ans dummy.next as head; 
class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}
function addTwoNumber(head1,head2){
    let ansNode= new Node(-1);
    let tail=ansNode;
    let current1=head1;
    let current2=head2;
    let counter=0;
    while(current1!==null || current2!==null){
      let data1=current1?.data?current1?.data:0;
      let data2=current2?.data?current2?.data:0;
      let sum=(counter+data1+data2)%10;
      let newNode=new Node(sum);
      tail.next=newNode;
      tail=newNode;
      counter=counter%10;
      if(current1){
         current1=current1.next;
      }
      if(current2){
        current2=current2.next;
     }
    }



    return ansNode.next;
}