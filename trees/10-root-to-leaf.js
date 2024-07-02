//https://www.geeksforgeeks.org/problems/root-to-leaf-paths
/* Will Solve 2 questions in 1 
  a)Find all possible paths possible from one root
  b)find a particular node's path

           10             a)Possible Paths =[10,4,3,4],[10,15,12],[10,15,18]
         /   \            b)To find a paticular node for eg 12 [10,15,12];
        5      15     
      /       / \
     3     12    18 
      \
       4
*/
const {tree} = require('./0tree-101/insert-tree')
function rootToLeaf(node,path,paths){
  if(node===null){
    return false;
  }
  path.push(node.value);
  const left=rootToLeaf(node.left,path,paths);
  const right=rootToLeaf(node.right,path,paths);
  if(left===false&& right===false){
    paths.push(path.slice());
  }
  path.pop();


  return paths;
}
const isSymmetrical=rootToLeaf(tree.root,[],[]);
console.log(isSymmetrical)