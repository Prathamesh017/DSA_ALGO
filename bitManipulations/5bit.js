//find odd or even number

//commonly used to check(no&1) in cp  instead of no%2===0
//as bit manipulation is faster
function oddOrEven(no){

  //the last bit is always set in ODD Numbers hence won't be 0 on & operation
  if(no&1){
    return "ODD"
  }
  else{
    return "EVEN";
  }
}


//find no of set bit i.e 1 for eg 13->1101 -3
function findNoOfSetBits(no){
  let ctr=0;
  while(no>1){
    // if(no%2===1){
    //   ctr++;
    // }
    if(no&1){
      ctr++;
    }
    // no=Math.floor(no/2);
    no=no>>1; //works exactly same as n>>k= (n/2^k) i e .1 here so it is divide by 2 only but due to bit manipulation it will faster
  }
  if(no===1){
    ctr++;
  }
  return ctr;
}



const setBits=findNoOfSetBits(15);
console.log(setBits);