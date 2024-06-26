class Node{
  constructor(value) {
    this.value=value;
    this.left=null;
    this.right=null;
  }
}
class Tree{
  constructor(){
    this.root=null;
  }

  insert(val){
    const newNode=new Node(val);
    //check for root
    if(this.root===null){
      this.root=newNode;
      return;
    }else{
      this.insertRec(this.root,newNode);
    }
  }
  insertRec(node,newNode){
    //value is smaller go to left, value is bigger go to right
   if(node.value>newNode.value){
    //check if is null on this end only no need to go furthur
    if(node.left==null){
      node.left=newNode;
      return;
    }else{
      //else go recursively left again
      this.insertRec(node.left,newNode);
    }
   }else{
     //check if is null on this end only no need to go furthur
     if(node.right==null){
      node.right=newNode;
      return;
    }
    //else go recursively left again
    else{
      this.insertRec(node.right,newNode);
    }
   }
  }
}

const tree=new Tree()
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(18);
/*      
           10
         /    \
        5      15
      /  \     / \
     3    7   12 18
*/

module.exports = { Tree, Node,tree}