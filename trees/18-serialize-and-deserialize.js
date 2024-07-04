//https://leetcode.com/problems/serialize-and-deserialize-binary-tree/description/

//write a 2 funcs serialize and derserialize which would convert binary tree in some format and later deseralize would take the same data,covert it back into the original binary 

/* 
Approach-
take values in arr with dfs in serialize and later convert the arr back into binary tree with 
*/
const {tree,Node} = require('./0tree-101/insert-tree')
function serialize(node){
  if(node===null){
    return []
}
const levelQueue=[];
const treeVals=[];
levelQueue.push(node);
while(levelQueue.length>0){
  const size=levelQueue.length;
    const node=levelQueue.shift();
    if(node){
      treeVals.push(node.value);
      levelQueue.push(node.left);
      levelQueue.push(node.right);
    }else{
      treeVals.push(node)
    }
  

}
return treeVals;  
}

function deseralize(arr){

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
  


const arr=serialize(tree.root);
const treeAns=deseralize(arr);
console.log(treeAns);