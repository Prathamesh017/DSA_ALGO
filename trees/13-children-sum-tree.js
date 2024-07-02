//https://www.geeksforgeeks.org/problems/children-sum-parent
//https://leetcode.com/problems/root-equals-sum-of-children/description/
/* the given binary tree should be changed in such a way that the child's sum should be equal to its parent , but we can only increment it though can't decrement

           10                                     22
         /   \                                   /   \
        5      15  -> Shoud be changed like   7      15      
      /  \                                     / \
     3    4                                   3   4
      
  see we only incremented according to our needs no decrement


  Approach - we will try to increment from bottom with backtracking and with value taken from top
*/
const {tree,Node} = require('./0tree-101/insert-tree')
function childSum(node,val){
   if(node===null){
    return null;
   }
   const left=childSum(node.left,val);
   const right=childSum(node.right,val);
   if(left===null && right==null){
      node.value=val;
   }else{
    node.value=left+right;
   }
   return node.value;
}

// childSum(tree.root,tree.root.value);
// console.log(tree.root);


//leetcode one just check if childLeftNode+childRightNode==CurentNodeVal
function checkSumTree(node){
  let levelQueue=[];
  levelQueue.push(node);
  while(levelQueue.length>0){
    const size=levelQueue.length;
    for (let i = 0; i <size; i++) {
      const node=levelQueue.shift();
      let left=0;
      let right=0;
      if(node.left){
         left=node.left.value;
         levelQueue.push(node.left);
      }
      if(node.right){
        right=node.right.value;
        levelQueue.push(node.right);
     }
     if(node.left || node.right){
       if((left+right)!==node.value){
         return false;
        }
      }
    }
  }
  return true;
}
console.log(tree);
const ans=checkSumTree(tree.root);
console.log(ans);

    