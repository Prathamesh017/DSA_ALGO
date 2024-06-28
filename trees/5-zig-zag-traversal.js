//https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal
/*Zig Traversal is Depth First Style Traversal but in Z way like left->right then right->left and again left to right and so on
           10          [10,15,5,3,7,12,18]
         /    \
        5      15
      /  \     / \
     3    7   12 18


*/


const { tree,Node } = require('./0tree-101/insert-tree')


function zigzagTraversal(node){
const ans=[];

const queueLevel=[];
queueLevel.push(node);
let isLeft=true;
while(queueLevel.length>0){
  const size=queueLevel.length;
  let level=[];
  for (let i = 0; i<size; i++) {
    const node=queueLevel.shift();
    level.push(node.value);
      if(node.left){
        queueLevel.push(node.left);
      }
      if(node.right){
        queueLevel.push(node.right);
      }
    
  }
  level=isLeft?level:level.reverse();
  ans.push(level);
  isLeft=(!isLeft);

}


return ans;
}



const ans=zigzagTraversal(tree.root);
console.log(ans);