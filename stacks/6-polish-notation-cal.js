//https://leetcode.com/problems/evaluate-reverse-polish-notation/description/

// Input: tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9
 

//Approach- Keep Adding Numbers in stack once found a symbol do that operation  for top 2 numbers and  add result back in the stack

const { Stack } = require('./0-stack-101')
function polishNotationCalc(arr){
  const symbols=["+","-","*","/"]
  const stack=new Stack();
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if(symbols.includes(element)){
      let num1=stack.pop();
      let num2=stack.pop();
      let result;
      if(element==="+"){
        result=num1+num2;
      }else if(element==="-"){
        result=num2-num1;
      }else if(element==="*"){
        result=num1*num2;
      }else{
        if(num2/num1>0){
          result=Math.floor(num2/num1);
        }else{
          result=Math.ceil(num2/num1);
        }
      }
      stack.push(result);
    }else{
      let num=+element;
      stack.push(num);
    }
    
  }
  return stack.top.data;
}
const arr=["10","6","9","3","+","-11","*","/","*","17","+","5","+"];
const res=polishNotationCalc(arr);
console.log(res);