//https://leetcode.com/problems/maximum-subarray/description/
//Sol-1
//passed 204 upto 2010 cases due to time exceded
//time complexity -O(n2)
// function maxSubArrSum(arr){
//   let i=0;
//   let max=arr[i];
//   while(i<arr.length){
//      let sum=arr[i];
//      max=max>arr[i]?max:arr[i];
//      for (let x =1+i; x<arr.length; x++) {
//           if(max<=sum+arr[x]){
//             max=sum+arr[x];
//           }
//           sum=sum+arr[x];

//      }

//      i++;
//   }

//   return max;
// }

//Soln- 2 Kadane's Algo
//visulaize like this
//we keep adding the arr, and keep updating the max while comparing with the sum , if there is no negative , we will keep on adding till last , and that will be whole array will be the sub-array
//we make the sum=0 once we sum uptill we get negative number sum  , which mmeans no need to continue furthur with this as subarrays uptill this will generate cancel each other  and we are already saving max till that point and keep and continue.
function maxSubArrSum(arr) {
  let sum = 0
  let max = -Number.MAX_VALUE
  let start = 0
  let startSub = 0
  let endSub=0;
  for (let i = 0; i < arr.length; i++) {
    if(sum==0){
       startSub=i;
    }
    if (sum + arr[i] >= 0) {
      start = i
      sum = sum + arr[i]
      max = max > sum ? max : sum
      endSub=i;
    } else {
      sum = 0
      max = max > sum + arr[i] ? max : sum + arr[i]
    }
   
    console.log(startSub, endSub)
     
    //  max=max>sum?max:sum;
  }

  return max
}

console.log(maxSubArrSum([-2,1,-3,4,-1,2,1,-5,4]))
