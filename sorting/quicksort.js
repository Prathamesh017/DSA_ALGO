

function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
  return arr
}
function partition(arr, low, high) {
  let pivot = arr[low]
  let i = low
  let j = high
  while (i < j) {
    //pick out the first element index with i where it should be grater than pivot so that make it eligble for swap as greater than pivot conveys that it should be on the right side of things
    
    while (i < high && pivot >= arr[i]) {
      i++
    }
    //smaller than pivot suggest it should exist on the left side of things
    while (j > low && pivot < arr[j]) {
      j--
    }
    if (i < j) {
      arr = swap(arr, i, j)
    }
  }
  //place pivot on correct index;
  arr = swap(arr, low, j)
  return j


 
  
}
function quickSort(arr, low, high) {
  if (low < high) {
    let partitionIndex = partition(arr, low, high)
    console.log(partitionIndex)
    quickSort(arr, low, partitionIndex - 1)
    quickSort(arr, partitionIndex + 1, high)
  }
  
}
let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1]
let low = 0
let high = arr.length - 1
quickSort(arr, low, high)
console.log(arr)
