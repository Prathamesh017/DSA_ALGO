//https://leetcode.com/problems/validate-binary-search-tree
/*
         5
       /   \                This might look like a binary search tree but the if you observe
      1     6               4 it is less than 6 correct , but it is on  right side of  5 so
            /  \            it should be bigger than 5
           4  8
 

So we have to have a range to check if they are in perfect range or not
*/
const { createTree } = require('../0tree-101/create-tree')

function validateBinarySearchTree(tree){
  // using level order
  console.log(-1>0)
  const levelStack=[];
  const ranges=[];
  levelStack.push(tree);
   ranges.push([Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY]);
  while(levelStack.length>0){
    const size=levelStack.length;
    for (let i = 0; i < size; i++) {
      const node=levelStack.shift();
      const range=ranges.shift();
      if(range[0]>node.value || node.value>range[1]){
        return false;
      }else{
        if(node.left){
          ranges.push([range[0],node.value]);
          levelStack.push(node.left);
        }
        if(node.right){
          ranges.push([node.value,range[1]]);
          levelStack.push(node.right);
        }
      }

    }
  }
  return true;
}




const arr =[2,1,3];
const tree = createTree(arr)
const ans = validateBinarySearchTree(tree)
console.log(ans)