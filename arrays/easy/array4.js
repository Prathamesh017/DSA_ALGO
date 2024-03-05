// https://leetcode.com/problems/move-zeroes/
//move zeros to the right

//correct but doesn't maintain the order but shifts zero to right correctly
function moveZeroes(arr){
 let i=0;
 let j=arr.length-1;
 debugger;
 while(i<j){
  while(arr[i]!==0){
    i++;
  }
  while((arr[j]==0)){
    j--;
  }
  if(i<j){
    let temp=arr[i]
    arr[i]=arr[j];
    arr[j]=temp;
  }
  // console.log(arr);
 }
 return arr;
}

//my solution
function moveZeroes2(arr){
  let i=0;
  let j=1;
  while(i<arr.length && j<arr.length){
    while(arr[i]!==0 && i<arr.length){
      i++;
    }
    if(i>j){
      j=j+i;
    }
    while(arr[j]===0 && j<arr.length){
      j++;
    }
    if(i<arr.length && j<arr.length){
    let temp=arr[i]
    arr[i]=arr[j];
    arr[j]=temp;
    }
  }
  return arr;
 }

 function moveZeroes3(arr){
  let j = -1;
  let n=arr.length;
    
  // Place the pointer j
  for (let i = 0; i < n; i++) {
      if (arr[i] === 0) {
          j = i;
          break;
      }
  }
  
  // No non-zero elements
  if (j === -1) return a;
  
  // Move the pointers i and j and swap accordingly
  for (let i = j + 1; i < n; i++) {
      if (arr[i] !== 0) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
          j++;
      }
  }
  
  return arr;
 }

console.log(moveZeroes3([4,2,4,0,0,3,0,5,1,0]))