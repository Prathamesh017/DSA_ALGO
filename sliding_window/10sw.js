//https://leetcode.com/problems/subarrays-with-k-different-integers/description/

/* //?Given an integer array nums and an integer k, return the number of good subarrays of nums. A good array is an array where the number of different integers in that array is exactly k.

Input: nums = [1,2,1,2,3], k = 2
Output: 7
Explanation: Subarrays formed with exactly 2 different integers: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2]
*/

//Brute Force - Generate ALL Subarrs T.C Exceeds
function goodSubArr(arr,k){
let noOfSubArrs=0;
let set=new Set();
for (let i = 0; i < arr.length; i++) {
  set.add(arr[i]);
  if(set.size===k){
    noOfSubArrs++;
  }
  for (let j = i+1; j < arr.length; j++) {
      set.add(arr[j]);
      if(set.size>k){
        break;
      }else if(set.size==k){
        noOfSubArrs++
      }
  }
  set=new Set();
}
return noOfSubArrs;
}
const res=goodSubArr([1,2,1,2,3],2);
console.log(res);

//Optimal - Using the formula  sum==k is same (sum<=k) - (sum<=k-1)

function goodSubArr2(arr,k){
  let left=0;
  let right=0;
  let map=new Map();
  let noOfSubArrs=0;

  while(right<arr.length){
    let val=arr[right];
    if(map.has(val)){
      let occ=map.get(val);
      map.set(val,occ+1);
    }else{
      map.set(val,1);
    }
    while(map.size>k){
      let valToBeDel=arr[left];
      let occ=map.get(valToBeDel);
      if(occ>1){
        map.set(valToBeDel,occ-1);
      }else{
        map.delete(valToBeDel);
      }
      left++;
    }
    noOfSubArrs=noOfSubArrs+(right-left+1);
    right++;
  }
  return noOfSubArrs;
}

function calculateGoodSubArr(arr,k){
  return goodSubArr2(arr,k)-goodSubArr2(arr,k-1);

  
}
const res2=calculateGoodSubArr([1,2,1,2,3],2);
console.log(res2);