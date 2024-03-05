// https://leetcode.com/problems/missing-number/
//finding missing number
//remember num^num=0 eg 2^2=0 4^4=0
function missingNumber(nums) {
  let x1 = 0
  let x2 = 0
  for (let x = 0; x < nums.length; x++) {
    x1 = x1 ^ nums[x]
    x2 = x2 ^ (x + 1)
  }

  // x1=every number except missing XOR each other
  //  x2 =every number till n
  //x1^x2=0^4^2^1^5^1^2^^3^4^5 will cancel out each other 

  return x1 ^ x2
}

console.log(missingNumber([0, 4, 2, 1, 5]))
