const { Tree } = require('../0tree-101/insert-tree')
//https://leetcode.com/problems/binary-tree-postorder-traversal/
/*Time Complexity - recurive call will be for each node hence O(n) and Space Complexity will be the level of the tree created , in Worst Case , It can be degenerated tree(single line tree structure hence ) O(n);
 */
class PostOrder {
  //pattern left,right,root;
  postOrder_traversal_recursive(node, arr) {
    if (node === null) {
      return arr
    }
    //left traversal till the last
    this.postOrder_traversal_recursive(node.left, arr)
    //right traversal till the last
    this.postOrder_traversal_recursive(node.right, arr)
    //then print
    arr.push(node.value)
    return arr
  }

  //Approach -> Seeing the recurive one , we can observe that it goess left->left->left  no left found ,then try to go right if yes , again tries to go left if yes again left otherwise again right till it find no right is possible furthure then in prints Similar Way we will right this program as well
  postOrder_traversal_iterative(node,arr){
    if (node === null) {
      return arr
    }
    const stackLevel=[];
    let current=node;
    while(current!==null ||stackLevel.length>0){
      //will keep going till Left Exist 
      if(current){
        stackLevel.unshift(current);    
        current=current.left;
    
      }else{
        //
         let temp=stackLevel[0].right; 
         //if there is right , again we have to check for left
         if(temp){
          current=temp;
          stackLevel[0].right=null;
         }else{
          //if temp is null , I can assume , there is no left or right for the top element so I can print it
          temp=stackLevel.shift(); //can remove the element now
          arr.push(temp.value);

          /*Assuming the current top(removed one) was right part Node  of its's below one(stack wise) I have  to go back as if I am right of the previous we can assume , it has covered both left and right
                5
              /   \
             4     6 
          like temp=6 and I am checking 5's Right is 6 if that is true left and right both are printed  [4,6] so can print root 5 and pop it out as well with below while loop
          */
          while(stackLevel.length!==0 && stackLevel[0].right &&stackLevel[0].right.value==temp){
            temp=stackLevel.shift();
            arr.push(temp)
          }
         }
      }

    }
    return arr;
  }
}

const tree = new Tree()
tree.insert(10)
tree.insert(5)
tree.insert(15)
tree.insert(3)
tree.insert(7)
tree.insert(12)
tree.insert(18)
/*
           10
         /    \
        5      15
      /  \     / \
     3    7   12 18
*/
const postOrder = new PostOrder()
const arr = postOrder.postOrder_traversal_recursive(tree.root, [])
const arr2 = postOrder.postOrder_traversal_iterative(tree.root, [])
console.log(arr,arr2);