//https://leetcode.com/problems/gas-station 

//given two arrs gas and cost , starting from any index we have to find can we make a complete cirlc starting  and ending from the same index , to start , we should have enough gas to begin with than cost ,after reaching next stop we can have the new gas at that index

/*
Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]  Output: 3
Explanation:
Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 4. Your tank = 4 - 1 + 5 = 8
Travel to station 0. Your tank = 8 - 2 + 1 = 7
Travel to station 1. Your tank = 7 - 3 + 2 = 6
Travel to station 2. Your tank = 6 - 4 + 3 = 5
Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
Therefore, return 3 as the starting index.*/



//Brute Force With Optimaztion - Working
//Major HINT - if a->d not valid path other paths which are between  like b,c will also be offourse not valid so  they can be skipped 
function cicleGasStation(gas,cost){  
  let i=0;
  while(i<gas.length){
    if(cost[i]<=gas[i] && (gas[i]>0)){
      let startIndex=i;
      let filledGas=gas[i]-cost[i];
      let nextIndex=startIndex==gas.length-1?0:startIndex+1;
      while(nextIndex!==startIndex){
        filledGas=filledGas+gas[nextIndex]
        if(cost[nextIndex]>filledGas){
             break;
        }
        filledGas=filledGas-cost[nextIndex];
        nextIndex=nextIndex==gas.length-1?0:nextIndex+1;
      }
      if(nextIndex===startIndex){
        return startIndex;
      }
      if(startIndex>nextIndex){
        return -1;
      }
      i=nextIndex;
    }else{
      i++;
    }
    
  }
  return -1;
}


const gas=[1,1];
const cost = [1,1]
const res=cicleGasStation(gas,cost);
console.log(res);


