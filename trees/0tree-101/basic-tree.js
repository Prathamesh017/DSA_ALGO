/*Implementing A  Simple Tree
Each node will have a left and right node which would be a node or can be null
so by example   (1)
              /    \
             (2)   (3)
            /  \   /  \
        null null null null 
*/


class Node{
  constructor(val){
    this.value=val;
    this.left=null;
    this.right=null;
  }
}

const root=new Node(1);
const leftNode=new Node(2);
const rightNode=new Node(3);
root.left=leftNode;
root.right=rightNode;