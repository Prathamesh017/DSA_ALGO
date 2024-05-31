//https://leetcode.com/problems/remove-k-digits

/*remove k digits from a interger string and find the possible smallest number , you can only remove consecutive digits Input: num = "1432219", k = 3
Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.*/


//Inintution  -  if given a bunch of digits , like 3,4,1,9 etch the smallest number found by this would be always be 1349  stacked up in ascedning order right? if we can shuffle the number we would have goten the ans easily but not allowed in this que,

//so we will start from first by placing the number in stack  , if we find the next number is smaller than the top , which would mean this won't be the smallest number possible as they are always in ascending order,  this is based on our above inution , if we can only stack number smaller top on the bigger number if we can't remove more digits,


//but what is no is 12345 k=2 , then all will be in stack as all are ascending , to solve this corner case we simply remove the k digits from stack as they are ascending we will easily have the smallest number 

const { Stack } = require('./0-stack-101')
function removeKDigits(str,k){
  const stack=new Stack();
  if(str.length===k){
    return "0"
  }
  stack.push(+str.charAt(0));
  for (let i = 1; i <str.length; i++) {
    let char=+str.charAt(i);
    while(stack.top && stack.top.data>char && k>0){
      stack.pop();
      k--;
    }
    stack.push(char);
  }

  while(k>0){
    stack.pop();
    k--;
  }

  let res="";
  while(stack.top){
    let top=stack.peek();
    res=top+res;
    stack.pop();
  }
  console.log(+res);
  return res.charAt(0)==="0"?+res:res;

}
const str="100";
const res=removeKDigits(str,1);
console.log(res);





