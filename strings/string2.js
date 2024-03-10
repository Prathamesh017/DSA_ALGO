//https://leetcode.com/problems/reverse-words-in-a-string/
function reverseWords(str) {
  let trimmedString=str.trim();
  let trimmedStrinfArr=trimmedString.split(" ");
  let output="";
  for (let i = trimmedStrinfArr.length-1; i>=0; i--) {
    output+=trimmedStrinfArr[i]?trimmedStrinfArr[i]:"";
    if(i!==0 && trimmedStrinfArr[i]!==""){
    output+=" ";
    }
  }
  return output;
};

console.log(reverseWords("example   good a"))