//https://leetcode.com/problems/count-number-of-nice-subarrays/description/
// Given an array  and an integer k. A continuous subarray is called nice if there are k odd numbers on it. for eg = [1,2,3,1,2] k =2  so valid subarr       [1,2,3] ,[2,3,1],[3,1];

//Brute Force -Generate ALL SUB Arrs;  T.L Exceed But Works
function niceSubArrs(arr,k){
 
  let subArrs=0;

  for (let i = 0; i < arr.length; i++) {
    let oddCount=arr[i]%2===0?0:1;
    if(oddCount===k){
      subArrs+=1;
    }
    for (let j = i+1; j < arr.length; j++) { 
      let val=arr[j]%2;
      if(val){
        oddCount++;
      }
      if(oddCount===k){
        subArrs+=1;
       
   
      }else if(oddCount>k){
        break;
      }
    }
    
  }
  
  return subArrs;

}
const res=niceSubArrs([2,2,2,1,2,2,1,2,2,2],2);
console.log(res);


function niceSubArrs2(arr,k){
   //convert [odd into 1 ,even into 0]
   for (let i = 0; i < arr.length; i++) {
     arr[i]=arr[i]%2==0?0:1;
   }
   //Same as 8sw.js
   let left=0; let right=0;
 let sum=0; let subArrs=0;
  if(k<0){
    return 0
  }
  while(right<arr.length){
    sum+=arr[right];

    //if is greater we move left;
    while(sum>k){
      sum-=arr[left];
      left++;
    }
   subArrs=subArrs+(right-left+1)
   right++;
  }
  return subArrs;

}
function calculatSubArr(arr,k){
  return niceSubArrs2(arr,k)- niceSubArrs2(arr,k-1);
}
const res2=calculatSubArr([2,2,2,1,2,2,1,2,2,2],2);
console.log(res);