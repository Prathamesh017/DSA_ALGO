//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
//Sol - TC - O(n2) Time Limit Exceded
// function buyStock(arr){
//   let profit=0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i+1; j < arr.length; j++) {
//       if(arr[j]-arr[i]>profit){
//         profit=arr[j]-arr[i];
//       }
//     }
//   }
//   return profit;
// }
function buyStock(arr){
  let profit=0;
  let buy=arr[0];
  let sell=arr[0];
  for (let i = 1; i < arr.length; i++) {
    if(arr[i]>buy){
      sell=arr[i];
      profit=profit>sell-buy?profit:sell-buy;
    }else{
      buy=arr[i];
    }
  }
  return profit;
}
console.log(buyStock([7,6,4,3,1]))