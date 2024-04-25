//Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.
// https://leetcode.com/problems/divide-two-integers/description/

//for eg- 21 ,3  return 7
// 3*7=21;
// 7 can be rearrange with 2's pow
// 3*(2^2+2^1+2^0)=21;
//(3*4)+(3*2)+(3*1)=21;
//so if I can get pow ,I can have 4+2+1=7;

//time limit excedd
function divideWithoutDivisor(num, den) {
  //need to handle signs as den and num can be negative, but if both are negative, signs get cancelled , so no worry ,but have to check if one of them is negative
  let sign = true // pos
  if (den > 0 && num <= 0) {
    sign = false
  } else if (den < 0 && num >= 0) {
    sign = false
  }
  num = Math.abs(num)
  den = Math.abs(den)
  //base case
  let ans = 0
  if (den === num) {
    ans=1
  }else if(den===1){
    ans=num
  }else{
  
  while (num>=den) {
    let smallerMul = 0
    let pow = 0
    while (num <= smallerMul) {
      // smallerMul = den * Math.pow(2, pow)
      smallerMul=den<<pow;
      if (smallerMul >= num) {
        break
      }
      pow++
    }
    // ans = ans + Math.pow(2, pow)
    ans = ans + (1<<pow)
    num = num - den * Math.pow(2, pow)
    num = num - (den<<pow)
  }
}
  return sign ? ans : -ans
}





const res = divideWithoutDivisor( 2147483648,2)
console.log(res)

