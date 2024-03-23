// https://leetcode.com/problems/odd-even-linked-list/
// group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}
class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }
  add(data) {
    const newNode = new Node(data)
    if (this.head) {
      this.tail.next = newNode
      this.tail = newNode
    } else {
      this.head = newNode
      this.tail = newNode
    }
  }
  addArr(ll, arr) {
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i]
      ll.add(element)
    }
  }
  print() {
    let currentFirstNode = this.head
    let element = ''
    while (currentFirstNode) {
      element += currentFirstNode.data + '->'
      currentFirstNode = currentFirstNode.next
    }
    console.log(element)
  }
}
//with extra space
function handleOddEven(head, isOdd) {
  let ans = []
  let temp = head
  let counter = 1
  while (temp) {
    let condition = isOdd ? counter % 2 !== 0 : counter % 2 === 0
    if (condition) {
      ans.push(temp.data)
    }
    counter++
    temp = temp.next
  }
  return ans
}
function handleOddEvenInPlace(head) {
  let left = head
  let right = head.next
  let evenHead = head.next

  //evenHead will store refrence the even part of linkedList bcz right will be null after iteration
  while (right && right.next) {
    left.next = left.next.next
    right.next = right.next.next
    right = right.next
    left = left.next
  }
  left.next = evenHead
  return left
}
const linkedList = new LinkedList()
linkedList.addArr(linkedList, [2, 1, 3, 5, 6, 4, 7])

// with extra space
let left = handleOddEven(linkedList.head, true)
let right = handleOddEven(linkedList.head, false)
console.log([...left, ...right])

//without extraSPace
handleOddEvenInPlace(linkedList.head)
linkedList.print()

module.exports = { LinkedList }
