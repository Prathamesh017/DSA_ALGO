//https://www.geeksforgeeks.org/problems/implementing-ceil-in-bst/1
/* Ceil is just greater than or equal to value 
         8
       /   \                
      3     12       for val=9 , ceil will be 10
    /  \    /
   1   6    10
      / \    \ 
     4  7    14 

*/

const { createTree} = require('../0tree-101/create-tree')

function ceilInBinarySearchTree(node,value){
  let top=node;
  let ans=null
  while(top){
    if(top.value===value){
      ans=top.value;
      break;
    }else if(top.value>value){
      ans=top.value;
      top=top.left;
    }else{
      top=top.right;
    }
  }

  return ans;



}








const arr=[10,5,11,4,7,null,null,null,null,null,8];
const tree=createTree(arr);
const ans=ceilInBinarySearchTree(tree,6);
console.log(ans);
