//https://leetcode.com/problems/rearrange-array-elements-by-sign
//Brute Force- Keep 2 separte arr postive and negative then inserting in the new one with one positive and one negative 


function rearrangeBySign(arr){
  let even=0;
  let odd=1;
  let new_arr=[];
  for (let i = 0; i < arr.length; i++) {
     if(arr[i]>0){
      new_arr[even]=arr[i];
      even=even+2;
     }else{
      new_arr[odd]=arr[i];
      odd=odd+2;
      
     }
  }
  return new_arr;
}

console.log(rearrangeBySign([28,-41,22,-8,-37,46,35,-9,18,-6,19,-26,-37,-10,-9,15,14,31]))
