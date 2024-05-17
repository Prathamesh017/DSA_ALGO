//Recursive Quick Sort 
//Step 1- Select A Pivot and Place and its correct index , 
//Step 2 - the sort befor pivot arr and after pivot
//Step 3 - Partion can be start, end , mid or any random



//! Time Ans Space Complexity
//? In the worst case,the choosen pivot will be biggest or smallest number of the arr, which won't divide the arr equally , it will be nearly the same arr only whose recursion tree will be almost (O(n))
// ? In the best case the choosen pivot will be in middle so we can divide the arr equally so faster result ,here log(n)

//So overall T.c  log(n).n  //logn for recursion and n for loop in partition 

function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
  return arr
}

//considering pivot ending element
function endSort(arr,start,end){
  let pivot =arr[end];
  let pivotIndex=start //assuming this will be the correct index of pivot;

  for (let i = start; i <end; i++) {
        if(arr[i]<pivot){
          arr=swap(arr,i,pivotIndex);
          pivotIndex++;
        }
  }
  swap(arr,pivotIndex,end);
  return pivotIndex;

}
//considering pivot start element
function startSort(arr,start,end){
let pivot=arr[start];

let i=start;
let j=end;
while(i<j){

  //trying to find element bigger than pivot for swapping with the right side
  while(i<end && arr[i]<=pivot){
    i++;
  }
  //trying to find element smaller than pivot for swapping with the left side
  while(j>start && arr[j]>pivot){
    j--;
  }
  if(i<j){
    arr=swap(arr,i,j);
  }
}
arr=swap(arr,start,j)
return j 

}

function quickSort(arr,start,end){

  if(start>=end){
    return;
  }
  // let pivot=endSort(arr,start,end);
  let pivot=startSort(arr,start,end);
  quickSort(arr,start,pivot-1);
  quickSort(arr,pivot+1,end);
  return arr;
}


let arr=[1,4,6,5,3,8,7,10,9];
let start=0;
let end=arr.length-1;
const res=quickSort(arr,start,end);
console.log(res);