//https://leetcode.com/problems/maximum-width-of-binary-tree/description(Good Problem)
/*Given A  Binary Tree , Find the maximum width possible

           10             Here maximum width will be 4 from [3,null,12,18]
         /   \            width would be considered level wise even if the node doesn't  
        5      15         exist in between 
      /       / \
     3     12    18 
      \
       4 

Approach
If we add just indexes to all the nodes , it would be lot easier to determine the width 

           1             Here biggest width will be (7-4+1)=4;
         /   \            
        2      3         
      /       / \
     4   (5)  6   7 
      \
       8
       
but this can cause overflow problem 
                   1
                  /
                2
              /
             4
            /
          8  


to calculate index forumala is (2*currentIndex) on left and (2*currentIndex)+1 on right
                1            
           /        \            
       (2*1)        (2*1)+1         
      /    \          / \
     (2*2) (2*2+1)  (3*2) (3*2+1) 
      \
      (4*2)

to avoid this we will rewrite indexes  as 1 to n only
           1           
         /   \            
        1     2         
      /       / \
     1   (2)  3   4 
      \
       1

*/

const {tree,Node} = require('./0tree-101/insert-tree')
function maximumWidth(node){
  let levelQueue=[];
  levelQueue.push({node,width:0});
  let max=0;
  while(levelQueue.length>0){
    let indexes=[];
    const size=levelQueue.length;
    let mmin = levelQueue[0].width; 
    //113 from 116 done , why mnin should be used not 100 clear yet
    for (let i = 0; i <size; i++) {
      const nodeObj=levelQueue.shift();
      indexes.push(nodeObj.width);
      if(nodeObj.node && nodeObj.node.left){
      let width=((nodeObj.width-1)*2)+1>0?((nodeObj.width-1)*2)+1:1;
      // let width=((nodeObj.width-mmin)*2)+1
      levelQueue.push({node:nodeObj.node.left,width});
      }
      if(nodeObj.node && nodeObj.node.right){
      // let width=((nodeObj.width-1)*2)+2>0?((nodeObj.width-1)*2)+2:2;
      // let width=((nodeObj.width-mmin)*2)+2
      levelQueue.push({node:nodeObj.node.right,width:width})};
      }
    if(indexes.length>0){
      let width=indexes[indexes.length-1]-indexes[0]+1;
      max=Math.max(width,max);
      indexes=[];
    }
  }
  return max;
}

const ans=maximumWidth(tree.root);
console.log(ans)


