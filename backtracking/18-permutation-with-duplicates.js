// https://leetcode.com/problems/permutations-ii/description/

/*Input: nums = [1,1,2]
 Output: [[1,1,2], [1,2,1], [2,1,1]] */
function swapping(arr,a,b){
  let temp=arr[a];
  arr[a]=arr[b];
  arr[b]=temp;
  return arr;
}

function permutation(arr,res,start){
  if(start>arr.length-1){
    res.push(arr);
    return;
 }
 for (let i = 0; i < arr.length; i++) { 
   if(i!==start && arr[start]===arr[i]){
    continue;
   }
   else if(i>=start){
     arr=swapping([...arr],i,start);
     permutation(arr,res,start+1);
   }  
 }
 return res;
  
}
//sorting is required for duplicates , as they will be consectutives ,so it will easy with our if condition to avoid swapping them 
const arr=[4,5,4].sort((a,b)=>a-b)
const res=permutation(arr,[],0);
console.log(res);