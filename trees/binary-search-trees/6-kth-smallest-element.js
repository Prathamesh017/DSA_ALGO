//https://leetcode.com/problems/kth-smallest-element-in-a-bst/description

/* In The Given Binary Tree, find the kth smallest element,
         8
       /   \                 for eg  2nd smallest is 3
      3     12                       4th smallest is 6
    /  \    /  \
   1   6    10  14
      / \     
     4  7    


on BST , doing inorder traversal  is always sorted
*/
const { createTree } = require('../0tree-101/create-tree')

function kthSmallestElement(tree,value,arr){

 
    if(tree===null){
      return null;
    }
    const left=kthSmallestElement(tree.left,value,arr);
    if(left){
      return left;
    }
    arr.push(tree.value);
    if(arr.length===value){
      return tree.value;
    }
    const right=kthSmallestElement(tree.right,value,arr);
    return right;
}

const arr = [5,3,6,2,4,null,null,1,null];
const tree = createTree(arr)
const ans = kthSmallestElement(tree, 3,[])
console.log(ans)