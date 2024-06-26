//https://leetcode.com/problems/same-tree/description/
//Given 2 trees find out if they are same or not



const { tree,Node } = require('./0tree-101/insert-tree')

//using preorderTraversal
function checkForSameTree(tree1,tree2){

  if(tree1===null || tree2===null){
    // only if both are null i.e are finished can return true;
    return tree1===tree2
  }
  if(tree1.value!==tree2.value){
    return tree1.value===tree2.value;
  }
  return checkForSameTree(tree1.left,tree2.left)&&checkForSameTree(tree1.right,tree2.right);
}
const root=new Node(1);
const leftNode=new Node(-2);
const rightNode=new Node(3);
root.left=leftNode;
root.right=rightNode;
const ans=checkForSameTree(root,tree.root);
console.log(ans);


















