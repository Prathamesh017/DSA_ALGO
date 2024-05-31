//https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses

/* From  a given string , remove minimum number of  invalid parentheses , to make a string valid Input: s = "lee(t(c)o)de)"
Output: "lee(t(c)o)de"
Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.*/

//! 1st Approach
function removeMinimumParenthisis(str){
  let openStack=[];
  let closeStack=[];
    for (let i = 0; i < str.length; i++) {
     let char=str.charAt(i);
     if(char==="("){
      openStack.push(i);
     }else if(char===")"){
       if(openStack.length===0){
         closeStack.push(i);
       }else{
        openStack.pop()
       }
     }
  }
  let ans='';
  for (let i = 0; i < str.length; i++) {
    let char=str.charAt(i);
    if(openStack.includes(i) || closeStack.includes(i)){
     continue;
    }
    ans+=char;
 }

 return ans;
}


//! 2nd Approach
/* approach is simple , we will first check for extra   close bracket and go from left to right an only them if there is any opencount present so that we can close it , so with this we can can easily get of extra closing bracket  

it can also exist possibly for extra opening bracket so we will do the same apprach from right to left , keeping tracking of closing bracket, and if we incounter a opening   
*/
function removeMinimumParenthisis2(str){

  //check for extra close paranthisis
  let firstCheck="";
  let openCount=0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if(char==="("){
      firstCheck+=char;
      openCount++;
    }else if(char===")" && openCount>0){
      firstCheck+=char;
      openCount--;
    }else if(char!=="(" && char!==")"){
      firstCheck+=char;
    }
  }

  console.log(firstCheck);
  let secondCheck="";
  let closeCount=0;
  for (let i = firstCheck.length-1; i >=0; i--) {
    const char = firstCheck.charAt(i);
    if(char===")"){
      secondCheck+=char;
      closeCount++;
    }else if(char==="(" && closeCount>0){
      secondCheck+=char;
      closeCount--;
    }else if(char!=="(" && char!==")"){
      secondCheck+=char;
    }
  }
  return secondCheck.split("").reverse().join("");
}

const str="lee(t(c)o)de)";
const res=removeMinimumParenthisis2(str);
console.log(res);