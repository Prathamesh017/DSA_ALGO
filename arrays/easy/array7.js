// https://www.codingninjas.com/studio/problems/longest-subarray-with-sum-k_6682399
//subarray= small chunks of array but contingous 
//findest longest subarry which sum equals k
// BRUTE FORCE 
function longestSubArr(arr,k){
 let max=0;
  for(let x=0;x<arr.length;x++){
    let sum=0;
    for(let y=x;y<arr.length;y++){
      sum=sum+arr[y]
      if(sum===k){
        max=max>(y-x+1)?max:(y-x+1);
      }
    }
  }

  return max;

}
console.log(longestSubArr([1,2,3,1,1,1,1],3))