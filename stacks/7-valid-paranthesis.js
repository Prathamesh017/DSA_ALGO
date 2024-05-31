//https://leetcode.com/problems/valid-parentheses/description/

// Input: s = "()"
// Output: true
// Example 2:
// Input: s = "()}"
// Output: false;

const { Stack } = require('./0-stack-101')
function validationParenthesis(str){

  if(str.length%2!==0){
    return false;
  }
  const open=["(","{","["];
  const obj={
    "(":")"
  }
  const stack=new Stack();
  for (let index = 0; index < str.length; index++) {
    let bracket=str.charAt(index);
    if(open.includes(bracket)){
      stack.push(bracket);
    }else{
      if(stack.top===null){
        return false;
      }
      if(bracket===")" && stack.top.data!=="("){
        return false;
      }
      else if(bracket==="}" && stack.top.data!=="{"){
        return false;
      }else if(bracket==="]" && stack.top.data!=="["){
        return false;
      }
      stack.pop();
    }

  }

  return stack.isEmpty()
}

const str="([])";
const res=validationParenthesis(str);
console.log(res);