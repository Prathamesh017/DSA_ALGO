//https://leetcode.com/problems/daily-temperatures/description/
//* Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

/*example Input: temperatures = [73,74,75,71,69,72,76,73] 
Output: [1,1,4,2,1,1,0,0]
after 73 , it increase next day hence 1, after 74 it increases  nexthence 2 , after 75 it increase directly after four days 76 hence 4
*/
//Brute Using 2 for loops . Works BUT Time Limit Exceeds
const { Stack } = require('./0-stack-101')
function dailyTemp(arr){
  let res=[];
  for (let i = 0; i < arr.length; i++) {
    let isWarmer=false;
    let temp=arr[i];
    for (let j = i+1; j <arr.length; j++) { 
      if(temp<arr[j]){
        res.push(j-i);
        isWarmer=true;
        break;
      }
    }
    if(!isWarmer){
      res.push(0);
    }

  }

  return res;
}

function dailyTemp2(arr){
let res= Array.from({ length: arr.length }, () => 0);
let stack=new Stack();
stack.push({index:0});
for (let i = 1; i < arr.length; i++) {
   if(arr[i]>arr[stack.top.data.index]){
    while(stack.top && arr[i]>arr[stack.top.data.index]){
      res[stack.top.data.index]=i-stack.top.data.index;
      stack.pop();
    }
   }
   stack.push({index:i});
}
return res;
}
const arr=[30,40,50,60]
const res=dailyTemp2(arr);
console.log(res);