//check for armstrong no
//371= 3^3 +7^3 + 1^1= 371 hence armstrong number  ,cube happens due to no of digits
//1634=1^4+6^4+3^4+4^4=1634  ; here 4 is taken because 4 digit number

function digitCount(num){
  let ctr=0;
   while(num>0){
     num=Math.floor(num/10);
     ctr++;
   }
   return ctr;
 }
 

function checkArmstrong(num){
  let temp=num;
  let noOfDigits=digitCount(num);
  let finNum=0;
  while(temp>0){
    const lastDigit=Math.floor(temp%10);
    finNum=finNum+Math.pow(lastDigit,noOfDigits);
    temp=Math.floor(temp/10);
  }
  return finNum===num;
}

const res=checkArmstrong(3721);
console.log(res);