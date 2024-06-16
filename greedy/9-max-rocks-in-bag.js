//https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks(just read question easy))

//Given two arrs , bags filled with rocks(i) and each bag's capacity ,  determine how many bags you can completely fill after taking  additionalRocks


function bagsToFill(rocks,capacity,additionalRocks){
  //finding out the difference will help to determine which bags whould be easy to fill

  let difference=[]
  for (let i = 0; i < rocks.length; i++) {
    let diff=capacity[i]-rocks[i];
    difference.push(diff);
  }

  difference.sort((a,b)=>a-b);
  let bagsToFill=0;
  for (let i = 0; i < difference.length; i++) {
    if( additionalRocks-difference[i]<0){
      break;
    }
    bagsToFill++;
    additionalRocks=additionalRocks-difference[i];
  }
  return bagsToFill;

}


const rocks=[2,2,0];
const capacity=[10,2,2];
const res=bagsToFill(rocks,capacity,100);
console.log(res);