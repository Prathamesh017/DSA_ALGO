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
//BY HASHING(see)
function longestSubArrHash(arr,k){
  let max=0;
  let sum=0;
  let map=new Map();
  for (let i = 0; i < arr.length; i++) {
    sum=sum+arr[i];
    //if the value already exist don't update the map
    if(!map.has(sum)){
      map.set(sum,i);
    }
    if(sum===k){
      max=max>map.get(i)?max:map.get(i);

    }
    let rem=sum-k
     if (map.has(rem)){
      let ans=i-(map.get(rem));
      max=max>ans?max:ans;
    }
  }
  return max;
}

//BEST APPROACH WITH 2 pointer
function longestSubArrPointer(arr,k){
  let left=0;
  let max=0;
  let sum=0;
  let right=0;

  while(right<arr.length){
    sum=sum+arr[right];
    if(sum>k){
      sum=sum-arr[left];
      left++
    }
    if(sum==k){
      max=max>right-left+1?max:right-left+1;
    }
    right++;
  }
  return max;
  
}
console.log(longestSubArrPointer([1,2,3,1,1,1,1],3))
// console.log(longestSubArrPointer([1,2,1,3],4))
// console.log(longestSubArrHash([2,0,0,3],3))
