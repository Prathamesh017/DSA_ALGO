//https://leetcode.com/problems/validate-stack-sequences/description/
/*
Check if push and pop is can be correctly done as the arrs suggest
Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
Output: true
Explanation: We might do the following sequence:
push(1), push(2), push(3), push(4),
pop() -> 4,
push(5),
pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
*/

const { Stack } = require('./0-stack-101')
function validateStack(push,pop){
  const stack=new Stack();
  let i=0;
  let j=0;
  while(i<push.length){
   let ele=push[i];
   stack.push(ele);
   while(!stack.isEmpty() && stack.top.data===pop[j]){
     stack.pop();
     j++;
   }
   i++;
  }
  return stack.isEmpty();
}
const push = [1,2,3,4,5];
const pop = [4,3,5,1,2];
const res=validateStack(push,pop);
console.log(res);