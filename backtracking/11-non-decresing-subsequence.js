//https://leetcode.com/problems/non-decreasing-subsequences/
// Input: nums = [4,6,7,7] (subSequence can be non continouse but should be in ascending order)
// Output: [[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]

//? How to determine this is a backtracking ans -> so generally when we have to go through whole arr with taking every element options(eg -subsets,subsequences), like here , we can guess this problem would be solved through backtacking
//seeing the output ,we know, we use can't use regular 2 for-loops , as it can be non-continous as well , hence backtracking will be used



//Solve Again and understand better()

//Time Complexity - with each index, we are either adding it or no add it leading to 2 operations on each index  therefore O(2^)
function generateSubsequences(arr,index,ans,finalAns){
  if(index>arr.length){
    return;
  } 
  if(ans.length>=2){
    finalAns.push(ans);
  }
  let set=new Set();
  for(let i=index;i<arr.length;i++){
    let lastAns=ans[ans.length-1];
    if((ans.length===0 || lastAns<=arr[i]) && (!set.has(arr[i]))){
        ans=[...ans,arr[i]];
        set.add(arr[i]);
        generateSubsequences(arr,i+1,ans,finalAns);
        ans=ans.slice(0,-1);
    }

  }
  return finalAns;
}

const arr=[4,6,7,7]
const res=generateSubsequences(arr,0,[],[]);
console.log(res);