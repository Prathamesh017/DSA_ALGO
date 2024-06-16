//https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden(revisit)
//give a arr , consisting ranges , and consider a 1d garden with length n(length of arr ) find min taps to open so that whole garden can be covered

/*
Input: n = 5, ranges = [3,4,1,1,0,0]
Output: 1
Explanation: The tap at point 0 can cover the interval [-3,3]
The tap at point 1 can cover the interval [-3,5]
The tap at point 2 can cover the interval [1,3]
The tap at point 3 can cover the interval [2,4]
The tap at point 4 can cover the interval [4,4]
The tap at point 5 can cover the interval [5,5]
Opening Only the second tap will water the whole garden [0,5]
*/

function minTapsToOpen(n,ranges){
let intervals=[];
 //take out all possible intervals;
for (let i = 0; i < ranges.length; i++) {
  let left=i-ranges[i]<=0?0:i-ranges[i]; //if is less than 0 can make it 0 directly right as we need to just find 0->n covering taps
  let right=ranges[i]+i>=n?n:ranges[i]+i; //same logic as above
  intervals.push([left,right]);
 }
 console.log(intervals);
 let walks=new Array(n).fill(0);
 for (let i = 0; i < intervals.length; i++) { 
  let left=intervals[i][0];
  let right=intervals[i][1]; 
   if(walks[left]<right){
     walks[left]=right;
   }
 }

console.log(walks);
 let taps=0;  //tap will be only opened when it is not safe to crosss furthur asssiuming the distance is not wet yet
 let maxSafeWalk=0; //till the max index ,which is safe to walk , once it crosses this , then no longer safe will return -1;
 let currentSafeWalk=0; //the current path user is walking , once it crosses it we open tap and increase it maxSafewalk

 for (let i =0; i <=walks.length; i++) {
   if(i>maxSafeWalk){
    return -1;  //no need 
   }
   
   //this is most important , when to open a tap
   //no longer safe ,I have to open a tap again
   if(i>currentSafeWalk){
      taps++;
      currentSafeWalk=maxSafeWalk;
   }
   maxSafeWalk=Math.max(walks[i],maxSafeWalk); // max 
  //  currentSafeWalk=
 }
 
 return taps;
 
}

const ranges=[0,0,0,0];
const res=minTapsToOpen(ranges.length-1,ranges);
console.log(res);