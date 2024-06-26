//https://leetcode.com/problems/diameter-of-binary-tree/description/

/*Diameter of a binary tree would be the biggest path between 2 nodes possible
     1
    / \
   2   3
      /  \            considering every node as curve find the biggest height like for 
     4    6           root , it diameter would be from left height 1+ right height 4 total
    /      \          diameter would be 4
   5        7         here the biggest one would would be from node 3 which would be 6 
  /          \
  8           9
*/
const { tree,Node } = require('./0tree-101/insert-tree')

//Brute Force - Take Each node and find its left and right height and add them so we get our path, and find the biggest path(diameter) Time Complexity - O(N2) as for each node we have to traverse the whole node to find the biggest path possible
function   getLevels(node,val){
  if(node===null){
    return val;
  
  }
  const leftHeight=getLevels(node.left,val+1);
  const rightHeight=getLevels(node.right,val+1);
  return Math.max(leftHeight,rightHeight);  
}
function diameterOfBinaryTree(root){
  const queueLevel=[];
  queueLevel.push(root);
  let max=0;
  while(queueLevel.length>0){
   //visiting each in node in dfs level-first-way
    const size=queueLevel.length;
    const node=queueLevel.shift();
    const heightOfNode=getLevels(node.left,0);
    const heightOfNode2=getLevels(node.right,0);
    max=Math.max(heightOfNode+heightOfNode2,max);
    for (let i = 0; i <size; i++) {
      if(node.left){
        queueLevel.push(node.left);
      }
      if(node.right){
        queueLevel.push(node.right);
      }
    }
  }
  return max;
}

//Optimal Approach- No need to visit every node, while calculating the height of tree we visit the whole tree we get left and right height, in that way only we can get out diameter which is the max (My Logic- The maximum possible path  would be somewhere from the top only which can be the top itself)
function findDiameterOfBinaryTree(node){
  let max=0;
  
  function findDiameter(node){

    if(node===null){
      return 0;
    }
    const left=findDiameter(node.left);
    const right=findDiameter(node.right);
    
   max=Math.max(left+right,max);
   return 1+Math.max(left,right);
  }
  findDiameter(node)
  return max;
}

const root=new Node(3);
const leftNode=new Node(1);
const rightNode=new Node(2);

root.left=leftNode;
leftNode.right=rightNode;

const ans=findDiameterOfBinaryTree(root);
console.log(ans);