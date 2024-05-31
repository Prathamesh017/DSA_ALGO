// https://leetcode.com/problems/simplify-path

/*find path  
'.'->  means same path 
.. => means back
*/
const { Stack } = require('./0-stack-101')
function findPath(str){
const directories = str.split("/");
const stack=new Stack();
for (let i = 0; i < directories.length; i++) {
  const ele = directories[i];
  if(ele ==="" || ele==="."){
    continue;
  }else if(ele===".."){
     stack.pop();
  }else{
    stack.push(ele);
  }
}
let ans="";
while(stack.top){
  let curr=stack.pop();
    ans="/"+curr+ans;
}
return ans;
// return ans.split("/").reverse().join("/");  
}


const str=`/.../a/../b/c/../d/./`;
const res=findPath(str);
console.log(res);