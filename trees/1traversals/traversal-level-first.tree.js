const { Tree } = require('../0tree-101/insert-tree')
//https://leetcode.com/problems/binary-tree-level-order-traversal/description/
//Level-order traversal (also known as breadth-first traversal) means searching level wise
class BreadthFirstSearch {
  //Simple Traversal
  bfs_traversal(node, arr) {
    if (node === null) {
      return arr
    }
    //to take nodes level by left , and get value
    const queue = []
    //inserting the first level
    queue.push(node)

    while (queue.length > 0) {
      //getting the first node of the queue
      const currentNode = queue.shift()
      arr.push(currentNode.value)
      //if it exists I know , There are new level on left
      if (currentNode.left) {
        queue.push(currentNode.left)
      }
      if (currentNode.right) {
        queue.push(currentNode.right)
      }
    }
    return arr
  }

  //Traversal with knowing  elements at each level
  bfs_traversal_levels(node, arr) {
    if (node === null) {
      return arr
    }
    //to take nodes level by left , and get value
    const queue = []
    //inserting the first level
    queue.push(node)

    while (queue.length > 0) {
      // this way I can know how many elements are there on this level so I can separte them;
      const size = queue.length
      const levels = []
      for (let i = 0; i < size; i++) {
        let currentNode = queue.shift()
        levels.push(currentNode.value)

        //if it exists I know , There are new level on left
        if (currentNode.left) {
          queue.push(currentNode.left)
        }
        if (currentNode.right) {
          queue.push(currentNode.right)
        }
      }
      arr.push(levels)
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
const BFS = new BreadthFirstSearch()
const arr = BFS.bfs_traversal_levels(tree.root, [])
console.log(arr)
