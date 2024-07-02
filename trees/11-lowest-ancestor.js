// Lowest Common Ancestor of a Binary Tree(nice question)
/*
           10          for a given 2 nodes, find out its ancestor
         /   \           for eg (5,15) the common ancestor will be 10
        5      15        for 5,9 it will be 5 itself
      /  \     / \
     3    8  12    18 
         / \
        6   9
*/

/* Approach
Brute - Find out the path of each node like for 5,9 for eg ->[10,5] and [10,5,8,9]
so lowest would be 5 , but this will need 2 arr so to optimize

Optimal ->
1)We will find the node value  and return the value
2)so for lets say 3,9 so first we will go for 10->5->3 so it will return 3 on 5's left traversal and it will go right 
3)so then it go to 8 and then left to 6 and then 6's Left->null and 6's Right>null  then return null and from  8 it will go right then find 9 return 9 then return 9 at 8 node as well
so once it found that both left and right are return value 3 from 3's node and 9 from 8'node , so we can say we found our ancestor 5


Do For 5,9 

*/
const {tree} = require('./0tree-101/insert-tree')
function lowestAncestor(node,p,q,ans){
  if(node===null){
    return null;
  }
  if(node.value===p || node.value===q){
    return node.value;
  }
  const left=lowestAncestor(node.left,p,q);
  const right=lowestAncestor(node.right,p,q);
  if(left && right){
     return node.value;
  }
  else if(left || right){
    return left||right
  }else{
    return null;
  }

}


const ans=lowestAncestor(tree.root,5,15);
console.log(ans)