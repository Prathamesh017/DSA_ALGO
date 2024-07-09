// https://www.geeksforgeeks.org/problems/floor-in-bst/1
/* Floor is just smaller than or equal to value 
         8
       /   \                
      3     12       for val=11 , floor will be 10
    /  \    /
   1   6    10
      / \    \ 
     4  7    14 

*/

const { createTree} = require('../0tree-101/create-tree')

function floorInBinarySearchTree(node,value){
  let top=node;
  let ans=null
  while(top){
    if(top.value===value){
      ans=top.value;
      break;
    }else if(top.value>value){
      top=top.left;
    }else{
      
      ans=top.value;
      top=top.right;
    }
  }

  return ans;



}








const arr=[6,null,8,7,9];
const tree=createTree(arr);
const ans=floorInBinarySearchTree(tree,11);
console.log(ans);
