//set a bit
//set means 1
//Assume 0th to be first bit
//for eg - if no-9 i =  2 i.e 1 0 0 1 ---> 1 1 0 1  
function setBit(no, i){
  let bitMask = 1 << (i)
 //for i=1 will be 1,10 for 2 ,100 for 3 and so on
  let ans=no | bitMask;
  return ans;
}


//clear a bit
//set means 0
//Assume 0th to be first bit
//for eg - if no-13 i = 2   i.e 1 1 0 1 ---> 1 0 0 1  
function clearBit(no, i){
  let bitMask = 1 << (i)
 //for i=1 will be 1,10 for 2 ,100 for 3 and so on
  let flipBits=~(bitMask);
  //we want 0 on the ith index so flip it so  that can &(and) it to be 0
  let ans=no&flipBits;
  return ans;
}

//toggle a bit
//toggle means 0-->1 and 1 to 0
//Assume 0th to be first bit
//for eg - if no-13 i = 2   i.e 1 1 0 1 ---> 1 0 0 1  ,if is was 0 then change into 1
function toggleBit(no, i){
  let bitMask = 1 << (i)
  //XOR works correctly for togglying
  let ans=(bitMask)^ no;;
  return ans;
}






const res=setBit(9,2)
const res2=clearBit(13,2)
const res3=toggleBit(13,1)
console.log(res,res2,res3);







