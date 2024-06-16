//https://leetcode.com/problems/maximum-ice-cream-bars/description/(just read question easy)
function maxIcecream(costs,coins){
  costs.sort((a,b)=>a-b);;
  let ans=0;
  for (let i = 0; i < costs.length; i++) {
    if(coins-costs[i]<0){
      break;
    }
    ans=ans+1;
    coins=coins-costs[i];
  }
  return ans;
}

const costs = [1,3,2,4,1]; 
const coins = 7;
const res=maxIcecream(costs,coins);
console.log(res);