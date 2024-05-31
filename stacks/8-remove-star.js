//https://leetcode.com/problems/removing-stars-from-a-string/



//Without Stack
function removeStarLoop(str){
  let ans="";
  for (let i = 0; i < str.length; i++) {
    const ele = str.charAt(i);
    if((ele==="*")){
      ans=ans.slice(0,-1);
    }
     else{
      ans+=ele;
    }
    
  }
  return ans;
}




//WIth stacks
const { Stack } = require('./0-stack-101')
function removeStar(str){
const stack=new Stack();
  for (let i = 0; i < str.length; i++) {
    const ele =str.charAt(i);
    if(ele==='*'){
      stack.pop();
    }else{
      stack.push(ele);
    }
  }

  let ans='';
  while(stack.top){
    ans+=stack.peek();
    stack.pop();
  }
  return ans.split("").reverse().join("");
}

const str="ab*cd*e";
const res=removeStarLoop(str);
console.log(res);