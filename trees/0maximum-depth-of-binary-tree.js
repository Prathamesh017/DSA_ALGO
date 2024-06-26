//https://leetcode.com/problems/maximum-depth-of-binary-tree/description/
//Good Question- Important to cleartly understand for other problems as well
//Problems Based Arround Same Approach are 1,2 3 as well


const { tree } = require('./0tree-101/insert-tree')


function maximumDepth(node){
   if(node===null){
    return 0;
   }
   const left=maximumDepth(node.left);
   const right=maximumDepth(node.right);

   return 1+Math.max(left,right);

}
const ans=maximumDepth(0,tree.root);
console.log(ans);




