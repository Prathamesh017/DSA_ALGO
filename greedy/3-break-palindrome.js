//https://leetcode.com/problems/break-a-palindrome(can only build after considering the inputs)

/* !IMPORTANT POINTS TO CONSIDER BEFORE SOLVING THIS PROBLEM
 * Lexicographically Smaller- According to dictionary like 'aa' is smaller than 'ab' as  'aa' appears first 
 * Don't Try to change the middle of a odd palindrom string , it will stay the same 'aba' replace b with anything it will still be a palindrome only
 * We Will try to change 'b' or any character into  a so that we will get smallest dictionary type    string right 
 * If we can't find any string to change ,for 'aaaa' we will change the last one directly and return 
 * No Need to go till last , n/2 would be good enough as after n/2 it will be its mirror image only 
 */

function replaceAt(str, index, newChar) {
  const part1 = str.slice(0, index);
  const part2 = str.slice(index + 1);
  return part1 + newChar + part2;
}
function breakPalindrome(str){
  if(str.length===1){
    return "";   //single char will always be palindrome
  }

  console.log(str.length/2)
  for (let i = 0; i < Math.floor(str.length/2); i++) {
    const char=str.charAt(i);
    if(char==="a"){
      continue;
    }
    const newString = replaceAt(str, i, "a")
    return newString;
  }

  const newString = replaceAt(str, str.length-1, "b")
  return newString;
  

}

const palindrome="aba";
const res=breakPalindrome(palindrome)
console.log(res);