//https://leetcode.com/problems/binary-tree-right-side-view/description/
/*  Given RightMost Mode  of Each Level
           10               Top View [10,15,18,4]
         /   \           
        5      15     
      /       / \
     3     12    18 
      \
       4
*/
const { tree,Node,Tree} = require('./0tree-101/insert-tree')
function rightView(node){
  let ans=[];
  const queueLevel=[];
  queueLevel.push(node);
  let levels=[];
  while(queueLevel.length>0){
   let size=queueLevel.length;
   for (let i = 0; i < size; i++) {
     const node=queueLevel.shift();
     levels.push(node.value);
     if(node.left){
      queueLevel.push(node.left);
     }
     if(node.right){
      queueLevel.push(node.right);
     }
   }
   let rightMost=levels.pop();
   ans.push(rightMost);
   levels=[];

  }
  return ans;
}
const node=new Node(0);
const nodeRight=new Node(2);
node.right=nodeRight;



const ans=rightView(node);
console.log(ans);