//https://leetcode.com/problems/majority-element/description/

//Sol-1
// function majorElement(arr){
//   let map=new Map();
//   let size=Math.floor((arr.length-1)/2);
//   let ans;

//   for (let i = 0; i < arr.length; i++) {
//     if(map.has(arr[i])){
//       let v=map.get(arr[i]);
//       map.set(arr[i],v+1);
 
//     }else{
//       map.set(arr[i],0);
 
//     }
//   }
  
//   map.forEach((val,key)=>{
//     if(val>=size){
//       return ans=key;

//     }
//   })
//   return ans;
// }
//Sol-2 Moore's Voting Algorithm 
// The logic behind Moore's Voting Algorithm is based on the fact that if a majority element exists in an array, then after canceling out each occurrence of different elements with the majority element, the majority element will still remain.
//we assign the first element as the majority
// whenever it meets itself we increment ,and if not decrement
//once the count reachs 0 we shift the new one as majority element
//as we want majority we can assume that our majority element will occure more than half size of array so it won't be  cancelled out
function majorElement(arr){
let count=0;
let majorityEle;
 
 for(let x=0;x<arr.length;x++){
    if(count===0){
        majorityEle=arr[x];
        count++;
    }
    else if(majorityEle===arr[x]){
        count++;
    }else{
        count--;
    }

 }

 return majorityEle;
}
console.log(majorElement([3,2,3]))