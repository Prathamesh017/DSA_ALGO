//https://leetcode.com/problems/letter-combinations-of-a-phone-number/

/*Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]*/


//? Why Backtacking - return all possible letter combos
//Very IMP - Make a tree digram
const keyboard = {
  "1":"",
  "2": "abc",
  "3": "def",
  "4": "ghi",
  "5": "jkl",
  "6": "mno",
  "7": "pqrs",
  "8": "tuv",
  "9": "wxyz"
}  
function letterCombo(str,ans,ctr,finalArr){
   if(ans.length===str.length){
    finalArr.push(ans);
    return;
   }
  
  const charDigit=str.charAt(ctr);
  const chars=keyboard[charDigit];
  for (let i = 0; i <chars.length; i++) {
    ans+=chars.charAt(i);
    letterCombo(str,ans,ctr+1,finalArr);
    ans=ans.slice(0,-1);
  }
  return finalArr;
}

const res=letterCombo("","",0,[]);
console.log(res);