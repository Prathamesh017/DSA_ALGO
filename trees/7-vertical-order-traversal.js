//https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/description
/* Vertical Traversal is Left to right vertical traversal
           10          Level 1       [3,5,4,10,12,15,18]
         /   \           
        5      15     Level 2 
      /       / \
     3     12    18   Level 3
      \
        4             Level 4
        
Approach - So We want node values in vertical way, first vertical has 3,second has 5,4 and third has 10 12 fourth has 15 and 5 has 18 
So We are assigning them positiona according to 'x','y' axis way. y being the verical position and x being the level
so  10 will be verical(3)and Level 1 10->(1,3),5->(2,2) etc is there are at same position place value which is smaller before


1)First we will assign values to each node
2)Then Sort in such a way Lowest Vertical would be first if vertical are same , the lowest level and if level are also same then lowest value
*/

const { tree,Node } = require('./0tree-101/insert-tree')
class VerticalTraversal{
  constructor(){
    this.arr=[];
  }

  levelOrderTraversal(node){
    const queueLevel=[];
    let level=0;
    queueLevel.push({node,ver:0,level});
    while(queueLevel.length>0){
      const size=queueLevel.length;
      for (let i = 0; i <size; i++) {
        const nodeObj=queueLevel.shift();
        this.arr.push({val:nodeObj.node.value,ver:nodeObj.ver,level});
        if(nodeObj.node.left){
          queueLevel.push({node:nodeObj.node.left,ver:nodeObj.ver-1,level})
         }
         if(nodeObj.node.right){
         
          queueLevel.push({node:nodeObj.node.right,ver:nodeObj.ver+1,level})
         }
      }
      level++;
    }
    return this.arr;
  }
  sortVertically(node){
    let arr=this.levelOrderTraversal(node)
    arr=arr.sort((a,b)=>{
      if(a.ver==b.ver){
            if(a.level===b.level){
               return a.val-b.val
            }
             return a.level-b.level;
      }
      return a.ver-b.ver
   })

    const ans=[];
    let subArr=[];
    subArr.push(arr[0].val)
    for (let i =1; i<arr.length; i++) {
      const val=arr[i].val;
      if(arr[i-1].ver!==arr[i].ver){
        ans.push(subArr);
        subArr=[];
      }
       subArr.push(val);
    }
    console.log(subArr.length);
    if(subArr.length>0){
      ans.push(subArr);
    }
    return ans;
  }
  
}

const verticalOrderObj=new VerticalTraversal();
const ans=verticalOrderObj.sortVertically(tree.root);
console.log(ans);