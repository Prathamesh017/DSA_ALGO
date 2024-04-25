// https://leetcode.com/problems/minimum-bit-flips-to-convert-number/

//determine how many flips would be needed for to change start to goal
function convertFlipBits(start,goal){
  //XOR  helps to distiguish differences between bits
  //for eg - 1+1=0 0+0=0 else all 1 

  let result=start^goal;
  //result will have 1's at indexes where start and goal don't match
  //so we can count no of bits;
  let noOfBits=0;
  while(result>1){
    if(result&1){
       noOfBits++;
    }
    result=result>>1;
  }
  if(result===1){
    noOfBits++;
  }
  return noOfBits;
}


const noOfBits=convertFlipBits(10,7);
console.log(noOfBits);