// https://leetcode.com/problems/max-consecutive-ones-iii/description/

/* //? Given a binary array of  0s and 1s  nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's. eg  [1,1,1,0,0,0,1] max-5  for k=2 
as if I trun the first two zeros 1 as well

*/
//MINE - T.C -(O(N)), S.C -(O(N))
function maxConsecutiveOnes(arr,k){
  let left=0;
  let right=0;
  let max=0;
  let zeroCtr=0;
  let zeroFound=0;
  let zeros=k;
  let map=new Map();
  let len=0;
  while(right<arr.length){
    if(arr[right]===0){
     map.set(zeroCtr++,right);
     if(zeros<=0){
       left=map.get(zeroFound)+1;
       zeroFound++;
      }
      zeros--;
    }
    len=right-left+1;
    max=Math.max(max,len);
    right++;
 
  }
  return max;
}

//Optimal T.C (O(N))
function maxConsecutiveOnes2(arr,k){
  let left=0;
  let right=0;
  let zeros=0;
  let max=0;
  while(right<arr.length){
    if(arr[right]===0){
      zeros++;
    }
    if(zeros>k){
      if(arr[left]===0){
        zeros--;
      }
      left++;
    }else {
      //we won't update  length till we have zeros less than k and increment left in similar fasion
      len=right-left+1;
      max=Math.max(max,len);
    }
    right++;
  }
  return max;


}

const res=maxConsecutiveOnes2([1,1,1,0,0,0,1,1,1,1,0],2)
console.log(res);