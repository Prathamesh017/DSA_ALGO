//https://leetcode.com/problems/fair-distribution-of-cookies

//? Why Backtracking  - if you read question carefully we have to attempting all possible distributions of cookies . hence backtracking can be one of the option

//Will Need Revision,Try to visulaize with help of tree; 

function findMax(arr){
  let max=0;
  for (let i = 0; i < arr.length; i++) {
     max=Math.max(arr[i],max);
  }
  return max;
  
}

function fairCookie(cookies,noOfChildren,res,index,min){
  if(index>cookies.length-1){
    let max=findMax(res);
    min=Math.min(max,min);
    return min;
  }
  let cookie=cookies[index];
  for (let i = 0; i <noOfChildren; i++) {
    res[i]+=cookie;
    min=fairCookie(cookies,noOfChildren,res,index+1,min);
    res[i]-=cookie;  
  }
  return min;
  
}

const arr=[8,15,10];
const cookie= Array.from({ length: arr.length }, () => 0);
const res=fairCookie(arr,2,cookie,0,Number.MAX_VALUE)
console.log(res);