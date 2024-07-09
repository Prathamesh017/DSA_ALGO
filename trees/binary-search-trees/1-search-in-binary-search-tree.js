//https://leetcode.com/problems/search-in-a-binary-search-tree

// Find Value in Given Binary Search Using Binary Search Approach
const { createTree} = require('../0tree-101/create-tree')



function binarySearchTree(node,value){
  let top=node;
  let ans=null
  while(top){
    if(top.value===value){
      ans=top;
      break;
    }else if(top.value>value){
      top=top.left;
    }else{
      top=top.right;
    }
  }

  return ans;



}








const arr=[4,2,7,1,3];
const tree=createTree(arr);
const ans=binarySearchTree(tree,2);
console.log(ans);
