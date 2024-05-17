//https://leetcode.com/problems/palindrome-partitioning/description/
//Given a string s, partition s such that every substring of the partition is palindrome. Return all possible palindrome partitioning of s.

// ? How to Guess backtracking - > "return all possible palindrome" , hence can be a backtracking solution


//Need Revision
//Time Complexity - with each index, we are either making it part of partation  or not making it part leading to 2 operations on each index  therefore O(2^n)
function isPalindrome(str) {
  //covert into arr then reverse and then join
  const reversedStr = str.split('').reverse().join('')
  return str===reversedStr;
}

function palindromePart(str,index,arr,res){
  if(index>str.length-1){
    res.push(arr)
    return;
  }

  for (let i = index; i < str.length; i++) {
    let char=str.substring(index,i+1);
    if(isPalindrome(char)){
      arr=[...arr,char];
      palindromePart(str,i+1,arr,res);
      arr=arr.slice(0,-1);
    }
    
  }

  return res;



}

const str="a"
const res=palindromePart(str,0,[],[]);
console.log(res)