//https://leetcode.com/problems/broken-calculator/description/ (GOOD QUESTIOn)

/*Given a start val n we can only do 2 steps (one step at a time) to make the value reach its proper target ,find  minimum steps required
Steps -multiply 2 or sub 1
Input: startValue = 3, target = 10 , Output: 3                                             Explanation: Use double, decrement and double {3 -> 6 -> 5 -> 10}.*/


function brokenCalc(n,target){
  if(n>target){
    return n-target
}
  let steps=0;
  while(n!==target){
    //once we get target below n , we can't divide furhur as it will go offcourse below 0 in that we can only incrment to reach our target
    if(n > target){
      return steps  +n - target;
    }
    if((target+1)%2===0 ){
      target=target+1;
      steps++;
    }else{
      target=Math.floor(target/2);
      steps++;
    }
    
   
  }
  return steps;
}

const num=1;
const target=1000000000;
const res=brokenCalc(num,target);
console.log(res);
