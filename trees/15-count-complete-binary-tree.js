//https://leetcode.com/problems/count-complete-tree-nodes/description/

/* Given a Complete Binary Tree, (completly filled tree till last , if last is incompletly filled but all left side is filled ,so it can be still considered a binary tree) count all nodes 

But the catch is not to use less than o(n) time complexity ,
if it is a complete binary tree , we can easily  user height for eg
           10             2^3-1=7 3 being the height , but what if it is not a complete
         /   \            binary and may not have (18 right side)
        5      15        
      /  \    /   \
     3    4  12    18 
      
       
Approach
           10        level 1             
         /   \                
        5      15     level 2 
      /  \    /   \          
     2    8  12    18  level 3
    /\   /\
   1 3   6 7            level 4

Steps 
1)to find total no of nodes formula= 2^(height of tree)-1"
2)so using that 1+(2^lefttree height-1 )+(2^righttree height-1) 
but this will only work if left height===right height which means it has to be a complete binary tree
3)so at each level , we will check the left node and right node if equal we will use formuala return if not we will addd 1+ do again left and right check on its child nodes recurivesly
*/
const {tree,Node} = require('./0tree-101/insert-tree')
function giveHeightOfLeftOrRightSubtree(node,isLeft){

  let ctr=0
  while(node){
    node=isLeft?node.left:node.right;
    ctr++;
  }
  return ctr;

}

function countCompleteBinaryTree(node){
  
  const left=giveHeightOfLeftOrRightSubtree(node.left,true);
  const right=giveHeightOfLeftOrRightSubtree(node.right,false);
  if(left===right){
    return ((Math.pow(2,left)-1)*2)+1;
  }else{
    const left=countCompleteBinaryTree(node.left)
    const right=countCompleteBinaryTree(node.right)
    return 1+right+left;
  }

}


const ans=countCompleteBinaryTree(tree.root)
console.log(ans)