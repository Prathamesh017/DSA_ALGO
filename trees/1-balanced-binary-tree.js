/*Tree is said to be Balanced if every depth of subtree does not differ more than 1
           10
         /    \                
        5      14     
      /  \      
     3    7   
In the above ,tree the top node left height is 3 and right is 2 , it is uneven but still balanced as the difference is not greater than  1.below is not balanced one
           10
         /    \
        5      15
      /  \     
     3    7
    /\
   1  2
*/

const { tree } = require('./0tree-101/insert-tree')
function isBalanceTree(node,val){
  if(node===null){
    return val;
  }
  const left=isBalanceTree(node.left,val+1);
  const right=isBalanceTree(node.right,val+1);

  if(Math.abs(left-right)>1){
    return -1;
  }
  return Math.max(left,right);
}

const ans=isBalanceTree(tree.root,0);
console.log(ans);


