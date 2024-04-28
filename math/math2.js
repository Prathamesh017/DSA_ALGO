//reverse the number
//421-->124
//same can be used for palindrome 
function reverseNumber(num){
  let sign=num>0?true:false;
  let revNum=0;
  num=Math.abs(num)
  while(num>0){
    const lastDigit=Math.floor(num%10);
    revNum=(revNum*(10))+lastDigit;
    num=Math.floor(num/10);
  }
  return sign?revNum:-revNum;
}

const res=reverseNumber(-214000);
console.log(res);