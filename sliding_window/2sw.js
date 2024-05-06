// https://leetcode.com/problems/longest-substring-without-repeating-characters/
//? Que - Find Longest Substring without repeating chars


// ? Double While Case T.C(Worst Case)(O(N+N)) while loops , but the inner loop won't go till N everytime
// ? Without T.C -> O(N)

function longestSubString(str){
  let left=0;
  let right=0;
  let charArr=[];
  let max=0;
  while(right<str.length){
    const currentChar=str.charAt(right);
    if(charArr.includes(currentChar)){
      // while(charArr.includes(currentChar)){
      //   charArr.shift();
      // }
      let indexOfChar=str.indexOf(currentChar);
      str=str.slice(indexOfChar+1);
      charArr= charArr.slice(indexOfChar+1)
      right=right-(indexOfChar+1)

    }
      charArr.push(currentChar);
      right++;
      max=Math.max(max,charArr.length);
  }
  return max;
}

const subArr=longestSubString("aabaab!bb");
console.log(subArr);