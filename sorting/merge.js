// MERGESORT WORKS ON DIVIDE AND CONQUER PHILOSOPY. IT WILL KEEP DIVIDING AND SPLITING ARRAY  TILL IT REACHS LAST ELEMENT THAT IS SINGLE ELEMENT IN ARRAY  AND THEN WILL START BY  MERGE  THE SPLITS IN SORTED ORDER
//STEPS
//1)KEEP DIVIDING TILL WE GET INIDIVUAL ELEMENTS
//2)AFTER START MERGING ONE BY ONE

function merge(arr, low, mid, high) {
  let temp = []
  let left = low   //first element of left arr
  let right = mid + 1 //first element of right arr
 
  //check till left<==mid means left hypo arr is finished
  //check till right<==high means right hypo arr is fished
  while (left <= mid && right <= high) {
    if (arr[left] < arr[right]) {
      temp.push(arr[left])
      left++
    } else {
      temp.push(arr[right])
      right++
    }
  }
  //if above while finished because right arry was smaller and iteration completed before left array
  while (left <= mid) {
    temp.push(arr[left])
    left++
  }
   //if above while finished because left arry was smaller and iteration completed before right array
  while (right <= high) {
    temp.push(arr[right])
    right++
  }
  
  //this  will only change specific values of main array by this logic
  for (i = low; i <= high; i++) {
    //temp[i-low] will return 0,1,2 index 
    arr[i] = temp[i - low]
  }
}

function mergeSort(arr, low, high) {
  //till only one element is left
  if (low >= high) {
    return
  }
  let mid = Math.floor((high + low) / 2)
  //dividing the  array in 2 halfes [low,mid] [mid,high] in below 2 mergeSorts
  //not actual dividation just be setting low and high which will acts as split
  mergeSort(arr, low, mid)
  mergeSort(arr, mid + 1, high)
  
  //merge 
  merge(arr, low, mid, high)

}

let arr = [4, 2, 5, 3, 1]
let low = 0
let high = arr.length - 1;
mergeSort(arr, low, high)
console.log(arr);
