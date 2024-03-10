//https://leetcode.com/problems/largest-odd-number-in-string


function largestOddNumber(num) {
  let max=0;

  for (let i =num.length-1; i>=0; i--) {
    if((+num.substring(i,i+1))%2!==0){
      max=(num.substring(0,i+1))
      return max;
    }
  }
  
  return max;
};
console.log(largestOddNumber("239537672423884969653287101"));