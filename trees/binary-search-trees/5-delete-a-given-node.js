//https://leetcode.com/problems/delete-node-in-a-bst/description

//Delete a Node , But it should still be binary search tree

/*
Approach- 

There are 2 ways we can do this eg- remove node 3
         8
       /   \                
      3     12       
    /  \    /  \
   1   6    10  14
      / \     
     4  7    

Case 1 - we remove left that is 1 subtree and place it on 3's right's left most subtree 4

          8
        /   \                
       6     12       
      / \    /  \ 
     4  7   10   14
    /     
   1
   
Case 1 - we remove right that is 6's subtree and place it on 3's left's right  most subtree 1

          8
        /   \                
       1     12       
       \    /  \ 
        6   10   14
       / \ 
       4  7 
        
*/

const { createTree } = require('../0tree-101/create-tree')


function deleteNode(tree, value) {
  if (tree === null) {
    return null
  }
  if (tree.value > value) {
    tree.left = deleteNode(tree.left, value)
  } else if (tree.value < value) {
    tree.right = deleteNode(tree.right, value)
  } else {
    //found the element
    //for child node
    if(tree.left===null && tree.right===null){
      return null;
    }
    //either left is not there then right , if right is not there automatically left
    if(tree.left===null){
      return tree.right;
    }
    if(tree.right===null){
      return tree.left;
    }

    //Use Either Case 1 or 2 

    //Case 1 - Remove Left Node
    // const left=tree.left;
    // let tempRight=tree.right;
    // while(tempRight.left){
    //   tempRight=tempRight.left;
    // }
    // tempRight.left=left;
    // return tree.right;

    // Case 2 - Remove Right Node
    // const right=tree.right;
    // let tempLeft=tree.left;
    // while(tempLeft.right){
    //   tempLeft=tempLeft.right;
    // }
    // tempLeft.right=right;
    // return tree.right;

  }
  return tree;
}

const arr = [5, 3, 6, 2, 4, null, 7]
const tree = createTree(arr)
const ans = deleteNode(tree, 5)
console.log(ans)
