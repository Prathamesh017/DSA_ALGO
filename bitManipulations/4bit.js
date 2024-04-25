//Note  The Power of 2 will only have 1 set bit right
//2- 10 , 4 -100, 8 -1000 etc
//hence we can always assume that then n-1 will always have all ones
//1- 1 , 3-011,7->0111 etc we can simple & it

//this is common pattern across number for eg-
//lets take 14 ->1 1 1 0 and 13-> 1 1 0 1-> 1 1 1 0
//we can see here the first unset bit in 14 is the 0th bit(assume start from 0) , we can see in 13 at position it is 1 
//simarly in 13, the first  unset bit is 1th bit ,in 12 we can see it is 1 
//This is important pattern to remember between n and n-1


//https://leetcode.com/problems/power-of-two/submissions/1239862618/
function checkPowWithBit(no){
  if(no<=0){
    return false;
  }
  if((no&(no-1))===0){
    return true
  }
  else{
    return false;
  }
}



//check if the number is power of 2
// like 16 3 yes , 42 ,23 no
function checkPow(num){

  if(num<=0){
    return false;
  }
  while(num>1){
    let rem=num%2;
    if(rem){
      return false;
    }
    num=num/2;
  }
  return true;
}

let res=checkPow(1);
console.log(res);