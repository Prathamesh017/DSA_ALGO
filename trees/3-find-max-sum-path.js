// https://leetcode.com/problems/binary-tree-maximum-path-sum/description/

/*Find maximum path sum possible from the tree
   -10      
    / \      maximum sum path here will be 15>20<7   ans=42
   9   20
      /  \            
    15     7
*/
const { tree,Node } = require('./0tree-101/insert-tree')

//Approach Using the "to find the height"(First Solved Problem 0th one) approach will helps to find the maximum sum as well because by that we traverse the whole


/* Dry Run
    -10        Step 1 -> GO Left-> 9   Step 2->Again Left no left returns null so does right
    / \        Step 3 max=0+0+9 and will return 9(as both left and right are zero only)
   9   20      Step 4=> first call with left finished which return 9, now right turn 
      /  \     Step 5 -> 20 ,then left 15 again ,15 will go left and right return         
    15     7   with 0 from both and max with 15 as previouslt it 9  and return with 15 back
               Step 6=> now 20's right 7 so with return with 7 as well(both 7's left and right are 0) still max=15
               Step 7-> now 20 got 15 from right and 7 from left so new max-15+7+20=42
               Step 8-> now 20 with return with 15(see last return code  we have to choose the better path as 20 can't take 15 and 7 both at same time) the biggest path would be either -10->20>15 or 10->20>7 hence we take bigger one so 
               Step 9-> so -10's right call return with 35 (20>15 path) and left already is 9 so max=9+(-10)+35=34 smaller than previous max 42 so this way we got our max path
*/


function findMaxSum(node){
  let max=0;
   
  function findSum(node){
    if(node===null){
      return 0;
    }
    //if by chance ,a path returns a negative value, we don't won't it as that path would be automatically be less than max
    const left=Math.max(0,findSum(node.left)); 
    const right=Math.max(0,findSum(node.right));
    max=Math.max(left+right+node.value,max);
   
    return node.value+Math.max(left,right);
  }
  findSum(node);
  return max;
}

const max2=Math.max(0,Number.MIN_VALUE)
console.log(max2);


const root=new Node(1);
const leftNode=new Node(-2);
const rightNode=new Node(3);
root.left=leftNode;
root.right=rightNode;
const sum=findMaxSum(root);
console.log(sum);
