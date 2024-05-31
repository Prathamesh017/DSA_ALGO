//https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/description/

//Approach - Needs to Verify Adjacent Element, hence one way can be using stacks

/*Input: s = "abbaca" Output: "ca" 
abbaca - removed adjacent duplicates will be aaca-> again remove => just ca
*/

const { Stack } = require('./0-stack-101')
function removeDuplicate(str){
  const stack=new Stack();
  stack.push({char:str.charAt(0)});
  for (let i = 1; i < str.length; i++) {
     if(stack.top && stack.top.data.char===str.charAt(i)){
       stack.pop();
     }
     else{
     stack.push({char:str.charAt(i)});
     }
  }
  let ans="";
  while(stack.top){
   ans+=stack.top.data.char;
   stack.pop()
  }
  return  ans;
}

const res=removeDuplicate("abbaca");
console.log(res);