// https://leetcode.com/problems/subsets/description/
//* Generate ALL Subsets 
// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

//! DO AGAIN , Try to visualize a tree , where with each iteration we add the number or don't add the number 

function subset(arr,res,index,result){
  if(index>=arr.length){
    result.push(res);
    return;
  }
  let val=arr[index];
  res=[...res,val];
  subset(arr,res,index+1,result);
  res=res.slice(0,-1);
  subset(arr,res,index+1,result);
  return result;
}

const res=subset([1,2,3],[],0,[]);
console.log(res);