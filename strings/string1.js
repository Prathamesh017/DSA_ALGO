//https://leetcode.com/problems/remove-outermost-parentheses/
//basically remove the outer parenthese bracker , 
//what is does that it keeps adding and deleting once a bracket completes
//for eg (()())->()() //outer bracket removed
//on first open increment but no add as Count is still 0
//on second open  count->1,
//on third  close add and decrement count->0
//on fourth count 0 so no add ,makes sense
function removeOuterParantheses(s){
  
  let openCount = 0;
  let output = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
        if (openCount) {
          output += s[i]
        };
        openCount++;
    
    }
    else if (s[i] === ")") {
      openCount--;
      if (openCount) {
        output += s[i]};
     
    }
    
  }
  return output;
}

console.log(removeOuterParantheses("(()())(())"))