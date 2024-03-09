//https://leetcode.com/problems/find-minimum-in-rotated-sorted-array
//to find out the minimum, 
//so the rotated array  consist one pair which will be sorted right
//either low-mid, or mid+1-end , so we can say current_low can be the first index of the sorted arr,then we can eliminate the sorted on and focus on non-sorted one
//also-https://www.codingninjas.com/studio/problems/rotation_7449070

function rotatedSortedArr(arr){
  let low=0;
  let end=arr.length-1;
  let min=Number.MAX_VALUE;

  while(low<=end){
    let mid=Math.floor((low+end)/2);
    if(arr[low]<=arr[mid]){
      min=min<arr[low]?min:arr[low];
      low=mid+1;
    }else{
      min=min<arr[mid]?min:arr[mid];
      end=mid-1;
    }
  }
  return min;
}
console.log(rotatedSortedArr([2,1]))