//https://leetcode.com/problems/boundary-of-binary-tree/description
/* The boundary traversal is the process of visiting the boundary nodes of the binary tree in the anticlockwise direction, starting from the root.
           10          [10,5,3,8,4,6,17,18,15,13,12,10] nodes visited in anticlockwise
         /    \          Steps 
        5      12        1)Do A LEFT BASED Traveseral till we reach leaf node [10,5,3,8]
      /         \        2)GET ALL LEAF NODES  LEFT TO RIGHT [4,6,17,18]
     3           13      3)DO RIGHT Based traversal till leaf node and then reverse it 
      \          /        [15,13,12,10]
       8        15  
      / \      / \
     4   6    17  18
*/
const { tree,Node } = require('./0tree-101/insert-tree')
class BoundaryOfBinaryTree{

  isLeafNode(node){
    //both left and right node doesn't exist,so it is a leaf node
    if((!node.left) && (!node.right)){
      return true;
    }
  }
  leftBasedTraversal(node,arr){
    //if it is not a leaf node safe to insert
    if(node===null){
      return arr;
    }
    if(!this.isLeafNode(node)){
      arr.push(node.value);
    }
    if(node.left){
      return this.leftBasedTraversal(node.left,arr);
    }
    else if(node.right){
      return this.leftBasedTraversal(node.right,arr);
    }
    
  }rightBasedTraversal(node,arr){
    //if it is not a leaf node safe to insert
    if(node===null){
      return arr;
    }
    if(!this.isLeafNode(node)){
      arr.push(node.value);
    }
    if(node.right){
      return this.rightBasedTraversal(node.right,arr);
    }
    else if(node.left){
      return this.rightBasedTraversal(node.left,arr);
    }
    return arr;

  }
  //to get all left nodes from left to right
  //used Inordertraversal as it will help to get nodes in left-right fashion
  inorderTraversal(node,arr){
    if(node===null){
      return arr;
    }
    this.inorderTraversal(node.left,arr);
     if(this.isLeafNode(node)){
     arr.push(node.value)
    }
    this.inorderTraversal(node.right,arr);
    return arr;
  }
  getBoundaryTraversal(node){
    const arr=[];
    this.leftBasedTraversal(node,arr);
    this.inorderTraversal(node,arr);
    let right=this.rightBasedTraversal(node,[]);  
    right.reverse().pop()
    arr.push(...right);
    return arr;
  }
}

const treeObj=new BoundaryOfBinaryTree();
const arr=treeObj.getBoundaryTraversal(tree.root);
console.log(arr);