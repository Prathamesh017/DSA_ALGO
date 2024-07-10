//https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree
/* 
We have already similar one in binary trees , but this is in bst , so the t.c will improve
         8
       /   \                
      3     12       for (1,7) it will be 3
    /  \    /
   1   6    10
      / \    \ 
     4  7    14 

Approach = given  2 nodes, there are 4 possiblities is that either they lie on left side ,right side , different sides , or a single path(6,7  will be 6 itself)

So If  both are  smaller than root , we move left(there can be more low common ancestor than root) , if bigger then move right , 
if both are on different paths , so there will be no low common ancestor than the root itself
and if we found the same element , then it will be the same path itself
(try to visualize)
*/
const { createTree } = require('../0tree-101/create-tree')

function lowestCommonAncestorBST(tree,val,val2){
  let root=tree;
  while(root){
    //both smaller than root
    if(root.value>val &&root.value>val2){
      root=root.left;
    }
    //both are bigger than root
    else if(root.value<val &&root.value<val2){
      root=root.right;
    }//both exist on different path
    else if((root.value<val &&root.value>val2) ||(root.value>val &&root.value<val2)){
      return root;
    }
    //both exist on same path
    else{
      return root;
    }

  }
}


const arr =[6,2,8,0,4,7,9,null,null,3,5];
const tree = createTree(arr)
const ans = lowestCommonAncestorBST(tree,2,8)
console.log(ans)