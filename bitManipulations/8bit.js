//Single Number
//find the single number from arr from groups of 3
//eg [1,1,1,5,2,2,2]; ans=5;

//logic 
//for  [2,2,2,3,4,4,4]
/* 
   2 - 0 1 0
   2 - 0 1 0
   2 - 0 1 0
   3 - 0 1 1
   4 - 1 0 0
   4 - 1 0 0
   4 - 1 0 0
*/
//If we see above on the rightmost but, there is only 1 set bit, on before that there is 4 and in fist one there are 3
//so if I keep track of set bits on each index, and I know the my ans's bit will always be at set if is ctr%3!===0;
//for eg-> because in group of 3 , if the bit is set I will always standout 


function singleNumberWithBits(arr){
  let ans=0;
  //I have to check till 32 bit index, 31 as first bit denotes sign 
  for (let bitMask = 0; bitMask <=31; bitMask++) {
    let ctr=0;

    for (let i = 0; i < arr.length; i++) {
      //check the bit is set or not on each index of each num i.e arr[i]
       if(arr[i]&1<<bitMask){
         ctr++;
       }
    }
    if(ctr%3===1){
      let bit=1<<bitMask;
      //set the bit at required index everytime
      ans=ans|(bit);
    }

  }
  return ans;
}

function singleNumberWitSorting(arr){
  //assume the arr is sorted or sort it
  //try with paper
  let index=1;
  let size=arr.length;
  let result;

  while(index<size){
    if(arr[index-1]!=arr[index]){
        result=arr[index-1];
        return result;
    }else{
      index=index+3;
    }
  }
  return arr[size-1];
  
}


//Concepts of Buckets
//Assume there are 3 buckets ones , twos ,threes
//so as the name suggest number appearing ones goes in one and so on
/* Entering Works in This Way 
   the number should go in ones , if it not present in twos
   the number should go in twos , if it is not  present in one
   the numer  should go in threes , if it is present in twos  
*/

/*we need to add first , so to add we can  use XOR(OR can also be used to add but XOR prepared here as we need to delete as well)
and also check if it is not present in twos ,
i.e (try to visulaize on basis of above at pratice time)
ones=(val^ones)&(~twos)
eg  - (4^0) //4  , ~0=1 
       4&1=4     //add successfully
      //if the value is present in twos , then ~4=0 1 1
      and 1 0 0 & 0 1 1 would be 0 so it won't be added 
*/


function singleNumbers(arr){
  let ones=0;
  let twos=0;
  //three not really needed;
  for (let i = 0; i < arr.length; i++) {
    //add in 1's if it is not present in twos
    ones=(arr[i]^ones)&(~twos)
    //will check if it exists in ones , if it doesn't find it , then it will add i.e that means if it is not in ones , it has found it's second occurence and is been deleted;
    twos=(arr[i]^twos)&(~ones)
  }
  return ones;
}


const res=singleNumberWithBits([2,2,2,3,4,4,4]);
const res2=singleNumberWitSorting([2,2,2,4,4,4,1]);
const res3=singleNumbers([5,3,5,3,5,3,1,]);
console.log(res,res2,res3);

console.log(1^2^3);
//SINGLE NUMBER 3 DO IT LATER
// https://leetcode.com/problems/single-number-iii/description/