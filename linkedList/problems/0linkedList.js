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
module.exports = { LinkedList }
