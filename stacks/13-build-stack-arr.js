//https://leetcode.com/problems/build-an-array-with-stack-operations

//for n , make a stream(loop) from 1 to n, make an arr adding push and pop according to the given arr
//for eg ->Input: target = [1,3], n = 3
// Output: ["Push","Push","Pop","Push"]
// Explanation: Initially the stack s is empty. The last element is the top of the stack.
// Read 1 from the stream and push it to the stack. s = [1].
// Read 2 from the stream and push it to the stack. s = [1,2].
// Pop the integer on the top of the stack. s = [1].
// Read 3 from the stream and push it to the stack. s = [1,3].


const { Stack } = require('./0-stack-101')
function buildStackArr(arr,n){
  const stack=new Stack();
  let resultArr=[];
  for (let i = 1; i <=n;i++){
    resultArr.push("Push");
    stack.push(i);
    if(!arr.includes(i)){
      resultArr.push("Pop");
    } 
    if(stack.peek()===arr[arr.length-1]){
      break;
    }
  }
  return resultArr;
}
let target = [1,2];
let n = 4
const res=buildStackArr(target,n);
console.log(res);