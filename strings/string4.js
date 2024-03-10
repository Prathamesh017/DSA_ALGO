// https://leetcode.com/problems/longest-common-prefix/submissions/
/**
 * @param {string[]} strs
 * @return {string}
 * strs.l
 */
// var longestCommonPrefix = function(strs) {
//   let word=""; //the variable that takes every character of the first string one by one
//   let words="";// the variable that stores the previous state of 'word' variable
//   let i; // variable for iterating through the remaining strings
//   let count=0; //To let the code know which character of the string to look at
//   while(count!=strs[0].length) // A loop to gather every character of the first string at 0th index
//   {
//       words=word; // stores the previous state
//       console.log(words);
//       word+=strs[0][count]; //adds the next character to 'word' variable's previous state
//       for(i=1;i<strs.length;i++) //A loop to iterate through the remaining strings
//       {
//           if(strs[i][count]!==word[count]) //condition for 'word' & 'count' number of character of remaining strings 
//           {
//               // if true then revert to previous state and break
//               word=words; //reverting to previous state
//               console.log("ss")
//               break;
//           }
//       }
//       if(word==words) //if state of 'word' remains unchanged then break
//       {
//         console.log("sss")
//           break;
//       }
//       count+=1; //increment to count to get the next character
//   }
//   return(word); //answer
// };

 function longestCommonPrefix(strArr){
  let currentWord="";
  let previousWord="";
  let count=0;

  while(count<=strArr[0].length-1 && strArr[0]){
    previousWord=currentWord; //preserve value;
    currentWord+=strArr[0][count];
    // console.log(currentWord);
    for (let i = 1; i <strArr.length; i++) {
      if(currentWord[count]!==strArr[i][count]){
          currentWord=previousWord
          break;
      }
    }strArr[0].le
    if(currentWord===previousWord){
      break;
    }
    count++;
  }
  return currentWord;

}
console.log(longestCommonPrefix(["flower","flow","flight"]));