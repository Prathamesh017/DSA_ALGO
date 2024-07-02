//https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/description/
/* given a target n and a value k we have to find the nodes values which are at kth distance from n node;

           10             for eg n=15 , k=1 
         /   \            so from 15 we have 1 at top , 12 at left and 18 at right
        5      15        ans [10,12,18]
      /       / \
     3     12    18 
      \
       4

Approach - The problem is that is this is a tree we can only go top->bottom so from 15 once found I can't go back at top 10 (no problem for left and right)
So We have to store the parent as a refrence (assignParent func)
Then find the node , we can get its left and right from it (findNode func)

so from node, for 1 to distance n get parent , left and right node
for eg from 15-> it can go 10,12,18 and only if distance matchs then only push in ans arr
also keep a visited arr,for eg from 15  it goto top 10 and distance =2 so from 10 it can again go to 15(on the right) as well , 

*/
const {tree,Node} = require('./0tree-101/insert-tree')
class NodeDistanceBinaryTree{
  constructor(){
    this.parentsMap=new Map();
  }
  assignParents(node){
   let levelQueue=[];
  levelQueue.push(node);
  this.parentsMap.set(node.value,null);
  while(levelQueue.length>0){
    const size=levelQueue.length;
    for (let i = 0; i <size; i++) {
      const node=levelQueue.shift();
      if(node.left){
        levelQueue.push(node.left);
        this.parentsMap.set(node.left.value,node);
      }
      if(node.right){
        levelQueue.push(node.right);
        this.parentsMap.set(node.right.value,node);
      }
    }
  }
  }
  findNode(node,target){
    let levelQueue=[];
    levelQueue.push(node);
    while(levelQueue.length>0){
      const size=levelQueue.length;
      for (let i = 0; i <size; i++) {
        const node=levelQueue.shift();
        if(node.value===target){
          return node;
        }
        if(node.left){
          levelQueue.push(node.left);
        }
        if(node.right){
          levelQueue.push(node.right);
        }
      }
    }
  }
  findDistantNodes(node,distance,target){
    //find distance at top , left and right level
    let levelQueue=[];
    let currentDistance=1;
    let visited=[];
    levelQueue.push(node);
    let ans=[];
    while(levelQueue.length>0){
      const size=levelQueue.length;
      for (let i = 0; i <size; i++) {
        const node=levelQueue.shift();
        visited.push(node.value);
        const parent=this.parentsMap.get(node.value);
        if(parent&& (!visited.includes(parent.value)) && parent.value!==target ){
          levelQueue.push(parent);
          if(currentDistance===distance){
            ans.push(parent.value)
          }
        }
        if(node.left && (!visited.includes(node.left.value)) && node.left.value!==target){
          levelQueue.push(node.left);
          if(currentDistance===distance){
            ans.push(node.left.value)
          }
        }
        if(node.right && (!visited.includes(node.right.value)) && node.right.value!==target){
          levelQueue.push(node.right);
          if(currentDistance===distance){
            ans.push(node.right.value)
          }
        }
      }
      if(distance===currentDistance){
        return ans;
      }
      currentDistance++;
    }
  }

}

const treeObj=new NodeDistanceBinaryTree();
treeObj.assignParents(tree.root);
const node=treeObj.findNode(tree.root,12);
const ans=treeObj.findDistantNodes(node,2,12)
console.log(ans)


//https://geeksforgeeks.org/problems/burning-tree(similar kind off  approach)