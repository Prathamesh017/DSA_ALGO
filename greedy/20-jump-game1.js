//https://leetcode.com/problems/jump-game (Similar with 16 min taps to open)


//Approach - from  ith index how much maximum I can go ,than my current , I will include it my path 
/*for eg [1,2,3,1,1,0,2,5] 
 index 0 = can travel 1   path [1]
 index 1 ,  I can travel go 2= max=1+2+3 greater than previous max so path [1,2]
 index 2 , v=3 so =5 greater than prev so path [1,2,3] upto 5th index distance covered
 (remeber  from 1 and 2 only 1 and 1 step I have taken from 3 3hence 5)
 index 3   v=1  so max=4 so no  need (if included I can only go uptill 4)
 index 4   v=1  so max=5 so if I i take this still will each uptil 5 onlu
 index 5   v=0  so max=5 but we need to take this  as index is 5 and we have only 5 as max as of now
 can't go further from index 5 ,hence false
*/ 
function jumpGame(arr){
  let max=0;
  for (let i = 0; i < arr.length; i++) {
     if(i>max){
      return false;
     }
     else if(i===max){
      max=max+arr[i]
     }else if(i+arr[i]>=max){
      max=arr[i]+i;
     }
  }
    return true;
  
}

const res=jumpGame([2,1,2,2,1,2,2,2]);
console.log(res);