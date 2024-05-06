//Sliding Window And Two Pointer Approach

//Q - Find the Longest SubArr where sum<=n;

//Brute Force - 2 loop iterating and checking on each subArr

//Optimal-  Sliding Window 
/* Sliding Window Algorithm 

  * primaryly used to in subarr or substring problems
  * Starts from picking a single window
  * there will be 2 ptrs->left and right both starting from  0th index
  * so if the condition is satisfies we move right by 1 
  * and if it doesn't we move left by 1 
  * left shrinks and right expands
  * on right we generally add stuff and on left we delete stuff 
*/


/*Sliding Window /2 Pointer Problem Types */

//? Pattern- 1 Constant Window 
/*
 * eg- Given an array of integers Arr of size N and a number K. Return the maximum sum of a     subarray of size K.  Arr = [100, 200, 300, 400] Output: 700                                Here Window will be constant of size 2
*/

function slidingConstantWindow(arr,k){
  let left=0;
  let max=0;
  let right=k-1;
  let sum=0;

  for (let i = 0; i <=right; i++) {
    sum=sum+arr[i];
   }
   max=sum;

  while(right<arr.length-1){
    sum=sum-arr[left++];
    sum=sum+(arr[++right]);
    max=Math.max(max,sum);
  }
  return max;
}

const res1=slidingConstantWindow([100,200,300,400],2);
console.log(res1);


//? Pattern 2 - Find Longest Subarr/Longest Sub
/*  
   * Asked Most In Interviews
   * Windows Will Shrink and Expand According to Condition
*/
function slidingWindowPtr(arr,k){
 let left=0;
 let right=0;
 let sum=0;
 let max=0;
 let pos=[];

 while(left<=right&& right<arr.length){
  sum=sum+arr[right];
  if(sum>k){
    sum=sum-arr[left];
    left++;
  }
  else if(sum<=k){
    let newMax=Math.max(max,right-left+1);
    if(newMax>=max){
      pos=[left,right];
      max=newMax;
    }
  }
  right++;
 }


 return {length:max,arr:arr.slice(pos[0],pos[1]+1)};
}

const res=slidingWindowPtr([1,2,8,0,0,1,7,0,12],10);
console.log(res);


//? Pattern 3 - Find No of SubArr based on A condition (Used Pattern 2 only to solve this type problems )

//? Pattern 4 - Finding Shortest/Minimum Window (Generally Works by finding Valid Window and shrinking and checking if it is still valid)