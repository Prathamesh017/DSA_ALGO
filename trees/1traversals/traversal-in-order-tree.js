const { Tree } = require('../0tree-101/insert-tree')
//https://leetcode.com/problems/binary-tree-inorder-traversal/submissions/1298641110/
/*Time Complexity - recurive call will be for each node hence O(n) and Space Complexity will be the level of the tree created , in Worst Case , It can be degenerated tree(single line tree structure hence ) O(n);
 */
class InOrder {
  //pattern left, root, right;
  inorder_traversal_recurive(node, arr) {
    if (node === null) {
      return arr
    }
    //left is first hence will go till the last left possible
    this.inorder_traversal_recurive(node.left, arr)
    //once left is finished ,print root
    arr.push(node.value)
    //right traversal
    this.inorder_traversal_recurive(node.right, arr)
    return arr
  }
   inorder_traversal_iterative(node, arr) {
    /*Approach 
    1)We will keep adding element stack wise till we get our first node which don't have a left
    2)Once we get , that would be our first element to add
    3)so Now taking the topmost element we make it left as null as we have visited it's left end  and as it is inorder we need to have root before moving to right hence not adding the "right"  right way and continue our iteration
    4)so now our current inserted element's root is at stack top ,left is already visited , then we will insert root and then check for right element and if there add it
    5)Repeat
    */

    let levelStack = []
    levelStack.push(node)
    while (levelStack.length > 0) {
      let currentNode=levelStack[0];
      if (currentNode.left) {
        levelStack.unshift(currentNode.left)  //Step 1 
      }else{
        arr.push(currentNode.value); //Step 2
        levelStack.shift();
          if(currentNode.right){
            levelStack.unshift(currentNode.right);  //Step 4,
          }else{
             if(levelStack.length>0){
               levelStack[0].left=null;  //Marking it null //Step 3
             }
          }
      }
    }
    return arr
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
const inorder = new InOrder()
const arr = inorder.inorder_traversal_recurive(tree.root, [])
const arr2 = inorder.inorder_traversal_iterative(tree.root, [])
console.log(arr,arr2)
