// HARD PROBLEM,
// https://leetcode.com/problems/sum-of-subarray-minimums 
/* find the minimum of each sub arr possible and sum it up
Input: arr = [3,1,2,4] Output: 17
[3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4]. 
Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1. 
*/

// ? Approach
/* find subarr possible for each no till it is minimum in that subarr 
for eg [2,5,3,4,6] -> lets take '3', for 3 
on left subarrs possible are in which it will be minimum are [5,3] ,[3] and on right it is [3], [3,4], [3,4,6]    .thus on left there is only 1 no(5) and on right there 2 nos(4,6)
so we find this for every subArr we would get our ans;



Formula Wise 
for eg [3,1,2,4] -> for 1 , there is no smaller on left  hence -1 and on right also there is no one smaller hence consider outofindex 4. 
NSL = [-1,-1,1,2] //for 3 and 1  , no next smaller number on left hence -1 , for 2 there is 1 on left hence index 1 and for 4 there is 2 hence index 2
NSR = [1,4,4,4] only for 3 there is smaller no on index 1 that is 1 , but for 1,2,4 there is no number smaller than them on right hence outofbound index 4 

formuala = for i=n; n<arr.length; n++; (n-NSL[n])*(NSR(n)-n) * arr[n];
example for 3 => (0-(-1)*(1+0))= 1 ,thus is one subarr where 3 will be  minimum = 1*3=3;
for 1 -> (1--1)*(4-1)=6 hence there are 6 sub arr where 1 will be min = 1*6=6
for 2->  (2-1)*(4-2)=2 hence there will 2 sub arr where 2 will be min =2*2=4 
for 3 -> (3-2)*(4-3)=hence there will be 1 sub arr where 3 will be min=1*3=3;
hence 3+6+4+3=17 ans


so we have to find `next smaller element to left (NSL)` and next smaller to Right (NSL) , also there are question where we have to Next Larger Element to Left and Right , Such Kind of Question are solved by stack


approach - for nsl , if stack empty ,push -1 in NSL and index in stack, so we will check if the top element is less than our current we are good , we add the new index in stack and top value in arr , if not we will keep reducing it till we get our soln 


approach for nsr  will be same as nsl just the difference we will iterate arr from last and add length if not found instead of -1 , 


P.S , there can be case where duplicates might  can add for eg  [2,3,2,1] for i= 0 , [2],[2,3] ,[2,3,2] would be valid and for i=2 same would be valid again [2],[2,3] ,[2,3,2] causing problem , to avoid this we can simply >= sign in any NSR or NSL so that it would be skipped and will be included only once

*/
const { Stack } = require('./0-stack-101')
function calculateNSL(arr,stack){
  //we have to get the first next min numbeer ,as till that point all subarrs till that point  are valid considering the fact that our no is smaller till we get our next min , which will make our number ma;
  let nsl=[];
  for (let i = 0; i < arr.length; i++) {
      if(stack.isEmpty()){
        nsl.push(-1);
      }else{

        //we will go till we get the number less than our current number as that we want and insert it into index
        while((!stack.isEmpty()) && (arr[stack.peek()]>=arr[i]) ){
          let curr=arr[stack.peek()];
          stack.pop();
        }
        let top=stack.peek();
        let data=stack.isEmpty()?-1:stack.peek();
        nsl.push(data);
      }
      stack.push(i);
  }
  return nsl;
}
function calculateNSR(arr,stack){
  let nsr=[];
  for (let i = arr.length-1; i>=0; i--) {
      if(stack.isEmpty()){
        nsr.push(arr.length);
      }else{
        //we will go till we get the number less than our current number as that we want and insert it into index
        while((!stack.isEmpty()) && (arr[stack.peek()]>arr[i]) ){
          stack.pop();
        }
        let top=stack.peek();
        let data=top||arr.length;
        nsr.push(data);
      }
      stack.push(i);
  }
  return nsr.reverse();
}

function sumOfSubArrMin(arr){
   const nsl=calculateNSL(arr,new Stack());
   const nsr=calculateNSR(arr,new Stack());
 
   let sum=0;
   console.log(nsl,nsr);
   for (let i = 0; i < arr.length; i++) {
    let leftPossibleSubArrs=i-nsl[i];
    let rightPossibleSubArrs=nsr[i]-i;
    let totalPossibleSubs=leftPossibleSubArrs*rightPossibleSubArrs;
    let currentNoMinInSubs=(arr[i]*totalPossibleSubs)
    sum=sum+currentNoMinInSubs;
   }

   return sum;
  //  const nsr=calculateNSR(arr,new Stack());
}




// const arr =[11,81,94,43,3];
const arr=[11,81,94,43,3];
const arr2=[3,1,2,4]
const ans=sumOfSubArrMin(arr);
console.log(ans);