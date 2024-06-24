const { Tree } = require('../0tree-101/insert-tree')

/*Time Complexity - recurive call will be for each node hence O(n) and Space Complexity will be the level of the tree created , in Worst Case , It can be degenerated tree(single line tree structure hence ) O(n);
 */
class PreOrder {
  //pattern root , left, right;
  preorder_traversal_recursive(node, arr) {
    if (node === null) {
      return arr
    }
    //root is first , hence will print it first
    arr.push(node.value)
    //left traversal
    this.preorder_traversal_recursive(node.left, arr)
    //right traversal
    this.preorder_traversal_recursive(node.right, arr)
    return arr
  }
  preorder_traversal_iterative(node, arr) {
    //Approach - Using Stack ,At each level , I will insert node in right-left way as we are going left right , left should be on before right(debug if not understood)
    let levelStack = []
    //inserting root
    levelStack.push(node)
    while (levelStack.length > 0) {
      //as root is first hence push first
      const currentNode = levelStack.shift()
      arr.push(currentNode.value)
      if (currentNode.right) {
        levelStack.unshift(currentNode.right)
      }
      if (currentNode.left) {
        levelStack.unshift(currentNode.left)
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
const preorder = new PreOrder()
const arr = preorder.preorder_traversal_recursive(tree.root, [])
const arr2 = preorder.preorder_traversal_iterative(tree.root, [])

console.log(arr, arr2)
