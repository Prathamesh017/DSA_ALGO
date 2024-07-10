//https://leetcode.com/problems/two-sum-iv-input-is-a-bst/description

/*
From a Given Tree, find if two nodes values are equal to k tree style

Approach 
Doing Inorder On BST will get use sorted arr and simple check

 */
const { createTree } = require('../0tree-101/create-tree')


function inorder_traversal(node,arr){
 
    if (node === null) {
      return arr
    }
    inorder_traversal(node.left, arr)
    arr.push(node.value)
    inorder_traversal(node.right, arr)
    return arr
  
}


function twoSumBst(tree,val){
  const inOrder=inorder_traversal(tree,[]);
  let left=1;
  let right=inOrder.length-1;
  while(left<right){
    if(inOrder[left]+inOrder[right]===val){
      return true;
    }
    else if(inOrder[left]+inOrder[right]>val){
       right--;
    }else{
      left++;
   }
  }
  return false;
}







const arr =[2,1,3];
const tree = createTree(arr)
const ans = twoSumBst(tree,4)
console.log(ans)