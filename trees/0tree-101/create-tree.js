const { Node} = require('../0tree-101/insert-tree.js')
function createTree(arr){

  const val=arr.shift();
   const tree=new Node(val)
   const levels=[];
   levels.push(tree);
   while(arr.length>0){
     let size=levels.length;
       const node=levels.shift();
       if(node===null){
         continue;
       }
       const left=arr.shift();
       if(left!==null){
       const leftNode=new Node(left);
       node.left=leftNode;
       levels.push(node.left);
       }
       const right=arr.shift();
       if(right!==null){
       const rightNode=new Node(right);
       node.right=rightNode;
       levels.push(node.right);
       }
   }
   return tree;   
   
 
 
 }

 module.exports = {createTree}