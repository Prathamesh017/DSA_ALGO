//https://leetcode.com/problems/recover-binary-search-tree/description(Good Problem)
// Given  a Incorrect BST which has 2 values swapped with one another , we have to return correct BST

/*
Brute = Do A Inorder Traversal , it will contain 2 values  at incorrect positons , we will sort the arr , and then traverse again with original tree and change values according to sorted arr  to corrected positions


this is incorrect bst - [3,25,7,8,10,15,20,5]; wrong value = 25,5
we keep prev with every traversal and check if is greater than the current , if yes we got our first swappable value , 
but ,next incorrect value can just be beside as well ,for eg 
[3,25,5,7,8,10,15,20] 
hence we store first=25 and last=7,  if we don't any other value which breaks the condition we swap these 2
but in our example we don't have adjacent one , so now  we already have a first=25 and last will be 5  then we exchange the values
*/

const { createTree } = require('../0tree-101/create-tree')


function recoverBST(tree){
  let prev=null,first=null,last=null;
  function inorder_traversal(node){
    if (node === null) {
      return null;
    }
    inorder_traversal(node.left)
    if(prev && prev.value>node.value){
      //if first instance
      if(first===null){
        first=prev;
      }
      last = node;
    }

    prev=node;
    inorder_traversal(node.right)
    return tree;
  }
  inorder_traversal(tree);
  let temp=first.value;
  first.value=last.value;
  last.value=temp
  return tree;
}

const arr =[1,3,null,null,2];
const tree = createTree(arr)
const ans = recoverBST(tree)
console.log(ans)