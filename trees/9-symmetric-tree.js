//https://leetcode.com/problems/symmetric-tree/description/
/* Given A Tree,  Find if there are symettrical(mirror image) or not
See Given Diagram in problem , it should be mirror like 
left node left===right node right
right node left===left node right

Approach- We will iterate the tree from left and right end at same time
*/
const {Node} = require('./0tree-101/insert-tree')
function  symettricalTree(nodeLeft,nodeRight){
  if(nodeLeft===null || nodeRight===null){
    //if both are finished ,then only it will return true else false
    return nodeLeft===nodeRight;
  }
  if(nodeLeft.value!==nodeRight.value){
    return false;
  }

  return symettricalTree(nodeLeft.left,nodeRight.right) && symettricalTree(nodeLeft.right,nodeRight.left);
}

const node=new Node(1);
const LeftNode=new Node(2);
const RightNode=new Node(2);
node.left=LeftNode;
node.right=RightNode;
const LeftLeftNode=new Node(3);
const LeftRightNode=new Node(4);
LeftNode.left=LeftLeftNode;
LeftNode.right=LeftRightNode;
const RightLeftNode=new Node(4);
const RIghtRightNode=new Node(3);
RightNode.left=RightLeftNode;
RightNode.right=RIghtRightNode;
const isSymmetrical=symettricalTree(node.left,node.right);
console.log(isSymmetrical)