//https://leetcode.com/problems/flatten-binary-tree-to-linked-list/description
/* Flatten a Binary Tree into LinkedList, node right should point to right and node left should be null
(Don't Create A New LinkedList) 

          10             LL 10->5->3->4->15->12->18
         /   \            
        5      15        
      /  \    /   \
     3    4  12    18 


Approach Recursive
Intution- We will start from rightmost , like 18 and back ,we want 15->12->18 so will return 18 and connect to 12's right ,and return 12->18 to 15 right
Dry Run 
at 15 -> it will go right at 18 and return with 18 left and right null then it will go to left with 12 and make the prev 18 as current node 12's right and return 12 and this will continue
*/
const {tree} = require('./0tree-101/insert-tree')
function flattenTree(node,prev){
  if(node===null){
    return prev;
  }
  prev=flattenTree(node.right,prev);
  prev=flattenTree(node.left,prev);
  node.right=prev;
  node.left=null;
  prev=node;
  return prev;
}

const ans=flattenTree(tree.root,null);
console.log(ans);

